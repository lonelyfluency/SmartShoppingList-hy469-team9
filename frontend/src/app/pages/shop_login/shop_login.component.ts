import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-shop_login',
  templateUrl: './shop_login.component.html',
  styleUrls: ['./shop_login.component.scss']
})

export class ShopLoginComponent {

}

// export class ShopLoginComponent {
//   title = 'Camera Realtime';
  
//   public webcamImage: WebcamImage = null;
//   private trigger: Subject<void> = new Subject<void>();
//   triggerSnapshot(): void {
//     this.trigger.next();
//   }
//   handleImage(webcamImage: WebcamImage): void {
//     console.info('Saved webcam image', webcamImage);
//     this.webcamImage = webcamImage;
//   }
  
//   public get triggerObservable(): Observable<void> {
//     return this.trigger.asObservable();
//   }
// }