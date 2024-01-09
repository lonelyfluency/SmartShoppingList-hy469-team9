import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InventoryItemModel } from '../../models/inventory/inventory.model';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private hostUrl: string = environment.host;
  private inventoryItemsSubject = new BehaviorSubject<InventoryItemModel[]>([]);

  public inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getAll(): Observable<InventoryItemModel[]> {
    return this.http.get<InventoryItemModel[]>(`${this.hostUrl}/api/inventory`)
      .pipe(
        map(result => result.map(item => new InventoryItemModel(item))),
        tap(items => this.inventoryItemsSubject.next(items)) // Update the BehaviorSubject
      );
  }

  public add(item: InventoryItemModel): Observable<InventoryItemModel> {
    return this.http.post<InventoryItemModel>(`${this.hostUrl}/api/inventory`, item)
      .pipe(
        tap(() => {
          // Fetch updated inventory items after adding
          this.getAll().subscribe();
        })
      );
  }

  // Update method
  public update(id: string, item: InventoryItemModel): Observable<InventoryItemModel> {
    return this.http.put<InventoryItemModel>(`${this.hostUrl}/api/inventory/${id}`, item)
      .pipe(
        tap(() => {
          // Fetch updated inventory items after updating
          this.getAll().subscribe();
        })
      );
  }

  // Delete method
  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostUrl}/api/inventory/${id}`)
      .pipe(
        tap(() => {
          // Fetch updated inventory items after deleting
          this.getAll().subscribe();
        })
      );
  }

  // Initialize inventory with items
  public initializeInventory(): void {
    this.getAll().subscribe();
  }
}