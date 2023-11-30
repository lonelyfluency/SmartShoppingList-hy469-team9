import { Component, ElementRef, Input, Renderer2, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements AfterViewInit{

  @Input() color: String = "#A2CD81";
  @Input() info: {height: Number, date: Number, month: Number}[] = [];

  @Output() elementClicked: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('lastElement') lastElementRef: ElementRef | undefined;

  private lastElement!: HTMLElement;
  private last_index!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {

    const elements = this.el.nativeElement.querySelectorAll('.graph-element');

    if (elements.length > 0) {
      // Initialize current_index and last_index
      this.last_index = elements.length - 1;

      //set the background color and <p> for the last element
      this.lastElement = elements[elements.length - 1];
      this.renderer.setStyle(this.lastElement, 'background-color', 'black');
      this.updateLabel(this.lastElement, this.info[this.last_index].date+"/"+this.info[this.last_index].month);

      //Scrolls to the last element
      if (this.lastElementRef) {
        this.lastElementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  onClick(element: HTMLElement, index: number): void {

    // Reset background color for the previous clicked element
    if (this.lastElement) {
      this.renderer.removeStyle(this.lastElement, 'background-color');
      this.updateLabel(this.lastElement, this.info[this.last_index!].date+'');
    }

    // Set background color for the clicked element
    this.renderer.setStyle(element, 'background-color', 'black');
    this.updateLabel(element, this.info[index].date+"/"+this.info[index].month);

    //emit the index of the last clicked element
    this.elementClicked.emit(index);

    // Update current_index and last_index
    this.last_index = index;

    // Store a reference to the last clicked element
    this.lastElement = element;
  }

  private updateLabel(element: HTMLElement, label: string): void {
    const pElement = element.querySelector('p');
    if (pElement) {
      this.renderer.setProperty(pElement, 'textContent', label);
    }
  }
}
