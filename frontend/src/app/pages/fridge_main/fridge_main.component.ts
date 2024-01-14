import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SmartSpeakerService } from 'src/app/global/services/smart-speaker/smart-speaker.service';
import { Subscription } from 'rxjs';

interface ShoppingItem {
  name: string;
  quantity: number;
  imageUrl: string;
  selected: boolean;
  expiration : number;
}

@Component({
  selector: 'app-fridge_main',
  templateUrl: './fridge_main.component.html',
  styleUrls: ['./fridge_main.component.scss']
})
export class FridgeMainComponent implements OnInit, OnDestroy {

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
          this.router.navigate(['/fridge_main']);
        }
        if (command.toLowerCase().startsWith('go to categories')) {
          this.router.navigate(['/fridge_category']);
        }
        if (command.toLowerCase().startsWith('go to shopping list')) {
          this.router.navigate(['/fridge_list']);
        }
        if (command.toLowerCase().startsWith('go to recipes')) {
          this.router.navigate(['/fridge_recipe']);
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

  selectItem(item: ShoppingItem): void {
    item.selected = !item.selected;
  }

  goToFridgeCategoryPage(): void {
    this.router.navigate(['/fridge_category']);
  }

  goToFridgeMain(): void {
    this.router.navigate(['/fridge_main']);
  }

  goToRecipePage(): void {
    this.router.navigate(['/fridge_recipe']);
  }

  goToFridgeShoppingList(): void {
    this.router.navigate(['/fridge_list']);
  }
}
