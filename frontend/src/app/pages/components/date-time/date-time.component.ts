import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit, OnDestroy {
  currentDate = new Date();
  currentTime = new Date();
  private intervalId: any;

  ngOnInit(): void {
    this.updateDateTime();
    // Update the time every second
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    this.currentDate = now;
    this.currentTime = now;
  }
}
