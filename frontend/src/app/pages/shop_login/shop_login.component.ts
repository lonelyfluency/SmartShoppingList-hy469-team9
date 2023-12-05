import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shop-login',
  templateUrl: './shop_login.component.html',
  styleUrls: ['./shop_login.component.scss']
})
export class ShopLoginComponent implements OnInit, OnDestroy {
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('canvas') canvasElement!: ElementRef;
  stream: MediaStream | null = null;

  ngOnInit() {
    // This lifecycle hook gets called once the component's view has been fully initialized
  }

  ngOnDestroy() {
    this.stopMedia();
  }

  getMedia() {
    const constraints = {
      video: { width: 500, height: 500 },
      audio: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.stream = stream;
        if (this.videoElement && this.videoElement.nativeElement) {
          this.videoElement.nativeElement.srcObject = stream;
          this.videoElement.nativeElement.play();
        }
      })
      .catch(error => console.error(error));
  }

  takePhoto() {
    if (this.canvasElement && this.canvasElement.nativeElement && this.videoElement && this.videoElement.nativeElement) {
      const ctx = this.canvasElement.nativeElement.getContext('2d');
      ctx.drawImage(this.videoElement.nativeElement, 0, 0, 300, 300);
    }
  }

  stopMedia() {
    if (this.stream) {
      const tracks = this.stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.srcObject = null;
    }
  }
}
