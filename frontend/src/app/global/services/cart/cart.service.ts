import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItemModel } from '../../models/cart/cart.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private hostUrl: string = environment.host;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(`${this.hostUrl}/api/cart`)
      .pipe(map(result => _.map(result, (item) => new CartItemModel(item))));
  }

  public add(item: CartItemModel): Observable<CartItemModel> {
    return this.http.post<CartItemModel>(`${this.hostUrl}/api/cart`, item)
      .pipe(map(result => new CartItemModel(result)));
  }

  public update(id: string, item: CartItemModel): Observable<CartItemModel> {
    return this.http.put<CartItemModel>(`${this.hostUrl}/api/cart/${id}`, item)
      .pipe(map(result => new CartItemModel(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.hostUrl}/api/cart/${id}`);
  }
}
