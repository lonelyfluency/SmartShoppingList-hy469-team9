import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItemModel } from '../../models/cart/cart.model';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private hostUrl: string = environment.host;
  private cartItemsSubject = new BehaviorSubject<CartItemModel[]>([]);

  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getAll(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(`${this.hostUrl}/api/cart`)
      .pipe(
        map(result => result.map(item => new CartItemModel(item))),
        tap(items => this.cartItemsSubject.next(items)) // Update the BehaviorSubject
      );
  }

  public add(item: CartItemModel): Observable<CartItemModel> {
    return this.http.post<CartItemModel>(`${this.hostUrl}/api/cart`, item)
      .pipe(
        tap(() => {
          // Fetch updated cart items after adding
          this.getAll().subscribe();
        })
      );
  }

  // Update method
  public update(id: string, item: CartItemModel): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(`${this.hostUrl}/api/cart/${id}`, item)
      .pipe(
        tap(() => {
          // Fetch updated cart items after updating
          this.getAll().subscribe();
        })
      );
  }

  // Delete method
  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostUrl}/api/cart/${id}`)
      .pipe(
        tap(() => {
          // Fetch updated cart items after deleting
          this.getAll().subscribe();
        })
      );
  }

  // Initialize cart with items
  public initializeCart(): void {
    this.getAll().subscribe();
  }
}