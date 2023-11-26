import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ItemPreviewComponent } from './pages/item-shop/item-preview/item-preview.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { TopBarComponent } from './pages/components/top-bar/top-bar.component';
import { ShopMainComponent } from './pages/shop_main/shop_main.component';
import { ShopProductsComponent } from './pages/shop_products/shop_products.component';
import { ShopOfferComponent } from './pages/shop_offer/shop_offer.component';
import { ShopCartComponent } from './pages/shop_cart/shop_cart.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { GraphComponent } from './pages/components/graph/graph.component';
import {ShopLoginComponent} from './pages/shop_login/shop_login.component';

const socketIoConfig: SocketIoConfig = { url: environment.host, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ItemShopComponent,
    ItemPreviewComponent,
    NavBarComponent,
    TopBarComponent,
    ShopMainComponent,
    ShopProductsComponent,
    ShopOfferComponent,
    ShopCartComponent,
    MobileComponent,
    GraphComponent,
    ShopLoginComponent
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
