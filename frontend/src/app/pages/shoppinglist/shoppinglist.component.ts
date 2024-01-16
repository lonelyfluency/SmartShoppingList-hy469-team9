import { Component, OnInit } from '@angular/core';
import { ShoppinglistItemModel } from 'src/app/global/models/shoppinglist/shoppinglist.model';
import { ShoppinglistService } from 'src/app/global/services/shoppinglist/shoppinglist.service';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  public shoppinglistItems: ShoppinglistItemModel[] = [];

  constructor(
    private shoppinglistService: ShoppinglistService,
    private SocketService: SocketsService
  ) {}

  ngOnInit(): void {
    // this.loadShoppinglistItems();
    this.subscribeToShoppinglistUpdates();
    // Subscribe to the BehaviorSubject to get real-time updates
    this.shoppinglistService.shoppinglistItems$.subscribe(
      items => this.shoppinglistItems = items,
      error => console.error('Error fetching shoppinglist items', error)
    );
    // Initialize the shoppinglist
    this.shoppinglistService.initializeShoppinglist();
  }

  // private loadShoppinglistItems(): void {
  //   this.shoppinglistService.getAll().subscribe(
  //     items => this.shoppinglistItems = items,
  //     error => console.error('Error fetching shoppinglist items', error)
  //   );
  // }

  private subscribeToShoppinglistUpdates(): void {
    this.SocketService.getShoppinglistUpdates((updatedShoppinglist: ShoppinglistItemModel[]) => {
      this.shoppinglistItems = updatedShoppinglist;
    });
  }


  selectItem(item: ShoppinglistItemModel): void {
    item.selected = !item.selected;
  }

  selectAllItems(): void {
    this.shoppinglistItems.forEach(item => {
      item.selected = true;
    });
  }

  selectReverseItems(): void {
    this.shoppinglistItems.forEach(item => {
      item.selected = !item.selected;
    });
  }

  deleteSelectedItems(): void {
    this.shoppinglistItems.forEach(item => {
      if (item.selected) {
        this.shoppinglistService.delete(item._id).subscribe();
        // alert(`Successfully deleted ${item.Name}.`); // Show an alert
      }
    });
    this.shoppinglistItems = this.shoppinglistItems.filter(item => !item.selected);
  }


}
