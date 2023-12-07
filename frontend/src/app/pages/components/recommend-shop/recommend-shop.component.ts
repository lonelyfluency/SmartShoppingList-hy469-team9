import { Component, OnInit } from '@angular/core';

interface RecommendedItem {
  imageUrl: string;
  price: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-recommend-shop',
  templateUrl: './recommend-shop.component.html',
  styleUrls: ['./recommend-shop.component.scss']
})
export class RecommendShopComponent implements OnInit {
  recommendedItems: RecommendedItem[] = [];

  constructor() {}

  ngOnInit(): void {
    // Load recommended items here, for example:
    this.recommendedItems = [
      { imageUrl: '../../../../assets/items/speaker.png', price: '€ 80', name: 'Lenovo K3 Mini Outdoor Wireless Speaker', selected: false },
      { imageUrl: '../../../../assets/items/engine_oil.png', price: '€ 12', name: 'Motul 5100 10W40 4-Stroke Motor cycle Engine Oil 1 Litre', selected: false },
      { imageUrl: '../../../../assets/items/mibag.png', price: '€ 10.3', name: 'Mi Multicolor Mini Backpack Travel', selected: false},
      { imageUrl: '../../../../assets/items/mouse.png', price: '€ 14', name: 'Logitech Mini Mouse', selected: false},
      { imageUrl: '../../../../assets/items/keyboard.png', price: '€ 20', name: 'Logitech Mini Keyboard', selected: false}

    ];
  }

  // Method to select an item
  selectItem(item: RecommendedItem): void {
    item.selected = !item.selected;
    console.log('Selected item:', item);
  }

}
