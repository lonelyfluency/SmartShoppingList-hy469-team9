import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopMainComponent } from '../../shop_main/shop_main.component';
import { ShopProductsComponent } from '../../shop_products/shop_products.component';
import { ShopCartComponent } from '../../shop_cart/shop_cart.component';
import { ShopOfferComponent } from '../../shop_offer/shop_offer.component';
import { MobileComponent } from '../../mobile/mobile.component';



const routes: Routes = [
    {
      path: '',
      component: MobileComponent,
      children: [
        { path: 'shop_main', component: ShopMainComponent },
        { path: 'shop_products', component: ShopProductsComponent},
        { path: 'shop_cart', component: ShopCartComponent},
        { path: 'shop_offer', component: ShopOfferComponent},
        { path: '**', redirectTo: 'nutrition', pathMatch: 'full' },]
    },
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class NavBarRoutingModule { }