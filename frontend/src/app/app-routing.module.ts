import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ShopMainComponent } from './pages/shop_main/shop_main.component';
import { ShopProductsComponent } from './pages/shop_products/shop_products.component';
import { ShopCartComponent } from './pages/shop_cart/shop_cart.component';
import { ShopOfferComponent } from './pages/shop_offer/shop_offer.component';

const routes: Routes = [
  // { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'item-shop', component: ItemShopComponent},
  { path: 'mobile', loadChildren:()=> import('./pages/components/nav-bar/nav-bar-routing.module').then(m => m.NavBarRoutingModule)},
  { path: 'shop_main' , component: ShopMainComponent},
  { path: 'shop_products' , component: ShopProductsComponent},
  { path: 'shop_cart' , component: ShopCartComponent},
  { path: 'shop_offer' , component: ShopOfferComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
