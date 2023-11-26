import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ShopMainComponent } from './pages/shop_main/shop_main.component';
import { ShopProductsComponent } from './pages/shop_products/shop_products.component';
import { ShopCartComponent } from './pages/shop_cart/shop_cart.component';
import { ShopOfferComponent } from './pages/shop_offer/shop_offer.component';
import { ShopLoginComponent } from "./pages/shop_login/shop_login.component";
import { FridgeMainComponent } from './pages/fridge_main/fridge_main.component';
import { FridgeCategoryComponent } from './pages/fridge_category/fridge_category.component';
import { FridgeListComponent } from './pages/fridge_list/fridge_list.component';
import { FridgeRecipeComponent } from './pages/fridge_recipe/fridge_recipe.component';
import { DetailPopupComponent } from './pages/detail_popup/detail_popup.component';
import { VoicePopupComponent } from './pages/voice_popup/voice_popup.component';
import { HandPopupComponent } from './pages/hand_popup/hand_popup.component';
import { VirtualTryonComponent } from './pages/virtual_tryon/virtual_tryon.component';

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
  { path: 'shop_login' , component: ShopLoginComponent},
  { path: 'fridge_main' , component: FridgeMainComponent},
  { path: 'fridge_category' , component: FridgeCategoryComponent},
  { path: 'fridge_list' , component: FridgeListComponent},
  { path: 'fridge_recipe' , component: FridgeRecipeComponent},
  { path: 'detail_popup' , component: DetailPopupComponent},
  { path: 'voice_popup' , component: VoicePopupComponent},
  { path: 'hand_popup' , component: HandPopupComponent},
  { path: 'virtual_tryon' , component: VirtualTryonComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
