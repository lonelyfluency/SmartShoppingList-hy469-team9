import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  constructor(private socket: Socket) {
  }

  getCartUpdates(callback: Function) {
    this.socket.on('cartUpdated', (cart: any) => {
      callback(cart);
    });
  }

  getShoppinglistUpdates(callback: Function) {
    this.socket.on('shoppinglistUpdated', (shoppinglist: any) => {
      callback(shoppinglist);
    });
  }

  getInventoryUpdates(callback: Function) {
    this.socket.on('inventoryUpdated', (inventory: any) => {
      callback(inventory);
    });
  }

  // Pub/Sub functions supported with sockets.
  public publish(event: string, data: any) {
    // Inform backend to broadcast socket event
    // Publish event needs to land on server and the server will publish it.
    this.socket.emit("client:event", { event: event, data: data });
  }
  public subscribe(event: string, callback: Function) {
    this.socket.on(event, (data: any) => {
      callback(data);
    })
  }
}
