import { Component, OnInit } from '@angular/core';
import { InventoryItemModel } from 'src/app/global/models/inventory/inventory.model';
import { InventoryService } from 'src/app/global/services/inventory/inventory.service';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  public inventoryItems: InventoryItemModel[] = [];

  constructor(
    private inventoryService: InventoryService,
    private SocketService: SocketsService
  ) {}

  ngOnInit(): void {
    // this.loadInventoryItems();
    this.subscribeToInventoryUpdates();
    // Subscribe to the BehaviorSubject to get real-time updates
    this.inventoryService.inventoryItems$.subscribe(
      items => this.inventoryItems = items,
      error => console.error('Error fetching inventory items', error)
    );
    // Initialize the inventory
    this.inventoryService.initializeInventory();
  }

  // private loadInventoryItems(): void {
  //   this.inventoryService.getAll().subscribe(
  //     items => this.inventoryItems = items,
  //     error => console.error('Error fetching inventory items', error)
  //   );
  // }

  private subscribeToInventoryUpdates(): void {
    this.SocketService.getInventoryUpdates((updatedInventory: InventoryItemModel[]) => {
      this.inventoryItems = updatedInventory;
    });
  }


  selectItem(item: InventoryItemModel): void {
    item.selected = !item.selected;
  }

  selectAllItems(): void {
    this.inventoryItems.forEach(item => {
      item.selected = true;
    });
  }

  selectReverseItems(): void {
    this.inventoryItems.forEach(item => {
      item.selected = !item.selected;
    });
  }

  deleteSelectedItems(): void {
    this.inventoryItems.forEach(item => {
      if (item.selected) {
        this.inventoryService.delete(item._id).subscribe();
        alert(`Successfully deleted ${item.Name}.`); // Show an alert
      }
    });
    this.inventoryItems = this.inventoryItems.filter(item => !item.selected);
  }


}
