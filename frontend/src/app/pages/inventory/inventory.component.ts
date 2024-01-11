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
  public inventoryRows: InventoryItemModel[][] = [];

  constructor(
    private inventoryService: InventoryService,
    private socketService: SocketsService
  ) {}

  ngOnInit(): void {
    this.subscribeToInventoryUpdates();
    this.inventoryService.inventoryItems$.subscribe(
      items => {
        this.inventoryItems = items;
        this.prepareRows();
      },
      error => console.error('Error fetching inventory items', error)
    );
    this.inventoryService.initializeInventory();
  }

  private subscribeToInventoryUpdates(): void {
    this.socketService.getInventoryUpdates((updatedInventory: InventoryItemModel[]) => {
      this.inventoryItems = updatedInventory;
      this.prepareRows();
    });
  }

  selectItem(item: InventoryItemModel): void {
    item.selected = !item.selected;
  }

  selectAllItems(): void {
    this.inventoryItems.forEach(item => item.selected = true);
  }

  selectReverseItems(): void {
    this.inventoryItems.forEach(item => item.selected = !item.selected);
  }

  deleteSelectedItems(): void {
    this.inventoryItems = this.inventoryItems.filter(item => {
      if (item.selected) {
        this.inventoryService.delete(item._id).subscribe();
        return false; // Exclude the item from the new array
      }
      return true;
    });
    this.prepareRows();
  }

  private prepareRows(): void {
    this.inventoryRows = [];
    for (let i = 0; i < this.inventoryItems.length; i += 3) { // Adjust for 3 items per row
      this.inventoryRows.push(this.inventoryItems.slice(i, i + 3));
    }
  }

  incrementAmount(item: InventoryItemModel): void {
    item.Amount++;
    this.inventoryService.update(item._id, item).subscribe();
  }

  decrementAmount(item: InventoryItemModel): void {
    if (item.Amount > 0) {
      item.Amount--;
      this.inventoryService.update(item._id, item).subscribe();
    }
  }

  incrementExpire(item: InventoryItemModel): void {
    item.expire++;
    this.inventoryService.update(item._id, item).subscribe();
  }

  decrementExpire(item: InventoryItemModel): void {
    if (item.expire > 0) {
      item.expire--;
      this.inventoryService.update(item._id, item).subscribe();
    }
  }
}
