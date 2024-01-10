import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShoppinglistItemModel } from '../../models/shoppinglist/shoppinglist.model';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  private hostUrl: string = environment.host;
  private shoppinglistItemsSubject = new BehaviorSubject<ShoppinglistItemModel[]>([]);
  private shoppinglistItems: ShoppinglistItemModel[] = [];
  public shoppinglistItems$ = this.shoppinglistItemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getAll(): Observable<ShoppinglistItemModel[]> {
    return this.http.get<ShoppinglistItemModel[]>(`${this.hostUrl}/api/shoppinglist`)
      .pipe(
        map(result => result.map(item => new ShoppinglistItemModel(item))),
        tap(items => this.shoppinglistItemsSubject.next(items)) // Update the BehaviorSubject
      );
  }

  public add(item: ShoppinglistItemModel): Observable<ShoppinglistItemModel> {
    return this.http.post<ShoppinglistItemModel>(`${this.hostUrl}/api/shoppinglist`, item)
      .pipe(
        tap(() => {
          // Fetch updated shoppinglist items after adding
          this.getAll().subscribe();
        })
      );
  }

  // Update method
  public update(id: string, item: ShoppinglistItemModel): Observable<ShoppinglistItemModel> {
    return this.http.put<ShoppinglistItemModel>(`${this.hostUrl}/api/shoppinglist/${id}`, item)
      .pipe(
        tap(() => {
          // Fetch updated shoppinglist items after updating
          this.getAll().subscribe();
        })
      );
  }

  // Delete method
  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostUrl}/api/shoppinglist/${id}`)
      .pipe(
        tap(() => {
          // Fetch updated shoppinglist items after deleting
          this.getAll().subscribe();
        })
      );
  }

  // Initialize shoppinglist with items
  public initializeShoppinglist(): void {
    this.getAll().subscribe((items) => {
      this.shoppinglistItems = items;
      this.shoppinglistItemsSubject.next(items);
    });
  }

  public getSelectedItems(): ShoppinglistItemModel[] {
    return this.shoppinglistItems.filter(item => item.selected);
  }
}