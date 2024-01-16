import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItemModel } from '../../models/cart/cart.model';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private hostUrl: string = environment.host;
  private cartItemsSubject = new BehaviorSubject<CartItemModel[]>([]);

  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.initializeCart(); // Initialize the cart when the service is created
  }

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
        tap(() => this.refreshCart()) // Refresh the cart items after adding
      );
  }

  public update(id: string, item: CartItemModel): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(`${this.hostUrl}/api/cart/${id}`, item)
      .pipe(
        tap(() => this.refreshCart()) // Refresh the cart items after updating
      );
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostUrl}/api/cart/${id}`)
      .pipe(
        tap(() => this.refreshCart()) // Refresh the cart items after deleting
      );
  }

  private refreshCart(): void {
    this.getAll().subscribe(
      items => this.cartItemsSubject.next(items),
      error => console.error('Error refreshing cart', error)
    );
  }

  // Initialize cart with items
  public initializeCart(): void {
    this.refreshCart();
  }
}
