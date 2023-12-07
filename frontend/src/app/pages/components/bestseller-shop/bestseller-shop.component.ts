import { Component, OnInit } from '@angular/core';

interface BestsellerItem {
  imageUrl: string;
  price: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-bestseller-shop',
  templateUrl: './bestseller-shop.component.html',
  styleUrls: ['./bestseller-shop.component.scss']
})
export class BestsellerShopComponent implements OnInit {
  BestsellerItems: BestsellerItem[] = [];

  constructor() {}

  ngOnInit(): void {
    // Load Bestseller items here, for example:
    this.BestsellerItems = [
      { imageUrl: '../../../../assets/items/voicebox.png', price: '€ 80', name: 'Logitech Gamer Voice Box', selected: false },
      { imageUrl: '../../../../assets/items/webcam.png', price: '€ 30', name: 'Logitech Lolipop Web Camera Pink', selected: false },
      { imageUrl: '../../../../assets/items/mibag.png', price: '€ 10.3', name: 'Mi Multicolor Mini Backpack Travel', selected: false},
      { imageUrl: '../../../../assets/items/earphone.png', price: '€ 38', name: 'Logitech Gamer Earphone', selected: false},
      { imageUrl: '../../../../assets/items/keyboard.png', price: '€ 20', name: 'Logitech Mini Keyboard', selected: false}

    ];
  }

  // Method to select an item
  selectItem(item: BestsellerItem): void {
    item.selected = !item.selected;
    console.log('Selected item:', item);
  }

}
