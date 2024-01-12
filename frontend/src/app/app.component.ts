import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  @ViewChild('appReplaceCursor', { static: true }) cursorReplacement: ElementRef = {} as ElementRef;

  private cursorPosition = { x: 0, y: 0 };

  public GesturesStr: string[] = [
    "SWIPE_LEFT",
    "SWIPE_UP",
    "SWIPE_DOWN",
    "SWIPE_RIGHT",
    "CIRCLE_CLOCKWISE",
    "CIRCLE_COUNTERCLOCKWISE",
    "PINCH",
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    (window as any)["electronAPI"].onGesture(
      (arg: any) => {
        console.log("Gesture recognised: ", this.GesturesStr[arg]);
        this.handleGesture(this.GesturesStr[arg]);
      }
    );
  }

  private handleGesture(gesture: string) {
    switch (gesture) {
      case "SWIPE_LEFT":
        window.history.forward();
        break;
      case "SWIPE_RIGHT":
        window.history.back();
        break;
      // case "CIRCLE_CLOCKWISE":
      //   window.location.reload();
      //   break;
      // case "PINCH":
      //   this.simulateLeftClick(); // Simulate left click
      //   break;
      case "SWIPE_UP":
        this.simulateRightClick(); // Simulate right click
        break;
      default:
        console.log(`Unhandled gesture: ${gesture}`);
        break;
    }
  }

  @HostListener('mousemove', ['$event'])
  onmousemove(event: MouseEvent) {
    if (this.cursorReplacement.nativeElement) {
      this.cursorReplacement.nativeElement.style.left = event.pageX + 'px';
      this.cursorReplacement.nativeElement.style.top = event.pageY + 'px';
      this.cursorPosition = { x: event.pageX, y: event.pageY };
    }
  }

  private simulateLeftClick() {
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: this.cursorPosition.x,
      clientY: this.cursorPosition.y
    });

    const element = document.elementFromPoint(this.cursorPosition.x, this.cursorPosition.y);
    element?.dispatchEvent(clickEvent);
  }

  private simulateRightClick() {
    const rightClickEvent = new MouseEvent('contextmenu', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: this.cursorPosition.x,
      clientY: this.cursorPosition.y
    });

    const element = document.elementFromPoint(this.cursorPosition.x, this.cursorPosition.y);
    element?.dispatchEvent(rightClickEvent);
  }
}
