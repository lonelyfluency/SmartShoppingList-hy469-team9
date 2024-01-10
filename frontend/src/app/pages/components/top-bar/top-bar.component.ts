import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/global/services/smart-speaker/smart-speaker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {
  searchQuery = '';
  private isRecording = false;
  private commandSubscription?: Subscription;

  constructor(private router: Router, private smartSpeakerService: SmartSpeakerService) {}

  ngOnInit() {
    this.commandSubscription = this.smartSpeakerService.commands$.subscribe(
      command => {
        if (command.toLowerCase().startsWith('search for ')) {
          this.searchQuery = command.split('search for ')[1];
          this.router.navigate(['/shop/shop_search'], { queryParams: { query: this.searchQuery } });
        }
        if (command.toLowerCase().startsWith('go home')) {
          this.router.navigate(['/shop/shop_main']);
        }
        if (command.toLowerCase().startsWith('go to products')) {
          this.router.navigate(['/shop/shop_products']);
        }
        if (command.toLowerCase().startsWith('go to cart')) {
          this.router.navigate(['/shop/shop_cart']);
        }
        if (command.toLowerCase().startsWith('go to offer')) {
          this.router.navigate(['/shop/shop_offer']);
        }
        if (command.toLowerCase().startsWith('go back')) {
          window.history.back();
        }
        if (command.toLowerCase().startsWith('go forward')) {
          window.history.forward();
        }
        if (command.toLowerCase().startsWith('refresh page')) {
          window.location.reload();
        }

      }
    );
  }

  onVoiceButtonClick() {
    if (this.isRecording) {
      this.smartSpeakerService.stop();
      this.isRecording = false;
    } else {
      this.smartSpeakerService.start();
      this.isRecording = true;
    }
  }

  onSearch(): void {
    this.router.navigate(['/shop/shop_search'], { queryParams: { query: this.searchQuery } });
  }

  ngOnDestroy() {
    if (this.commandSubscription) {
      this.commandSubscription.unsubscribe();
    }
  }
}
