import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ShopMainComponent } from './pages/shop_main/shop_main.component';
import { ShopProductsComponent } from './pages/shop_products/shop_products.component';
import { ShopCartComponent } from './pages/shop_cart/shop_cart.component';
import { ShopOfferComponent } from './pages/shop_offer/shop_offer.component';
import { ShopLoginComponent} from "./pages/shop_login/shop_login.component";
import { PhoneCartComponent} from "./pages/phone_cart/phone_cart.component"
import { FridgeMainComponent } from './pages/fridge_main/fridge_main.component';
import { FridgeCategoryComponent } from './pages/fridge_category/fridge_category.component';
import { FridgeListComponent } from './pages/fridge_list/fridge_list.component';
import { FridgeRecipeComponent } from './pages/fridge_recipe/fridge_recipe.component';
import {PhoneSignComponent} from "./pages/phone_sign/phone_sign.component";
import { DetailPopupComponent } from './pages/detail_popup/detail_popup.component';
import { VoicePopupComponent } from './pages/voice_popup/voice_popup.component';
import { HandPopupComponent } from './pages/hand_popup/hand_popup.component';
import { VirtualTryonComponent } from './pages/virtual_tryon/virtual_tryon.component';
import {Phone_loginComponent} from "./pages/phone_login/phone_login.component";
import {PhonePersonalInfoComponent} from "./pages/phone_personalInfo/phone_personalInfo.component";
import {PhoneInterestsComponent} from "./pages/phone_interests/shop_login.component";
import {PhoneAccountComponent} from "./pages/phone_account/phone_account.component";
import {PhonePaymentComponent} from "./pages/phone_payment/phone_payment.component";
import {PhoneEditProfileComponent} from "./pages/phone_editProfile/shop_login.component";
import {PhoneShoppingListManageComponent} from "./pages/phone_shoppingListManage/phone_shoppingListManage.component";
import {PhoneShoppingListDeleteComponent} from "./pages/phone_shoppingListDelete/phone_shoppingListDelete.component";
import {Phone_shopLocationComponent} from "./pages/phone_shopLocation/phone_shopLocation.component";
import {PhoneQrCodeComponent} from "./pages/phone_qrcode/phone_qrcode.component";
import {PhoneShopHistoryComponent} from "./pages/phone_shopHistory/phone_shopHistory.component";

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
  { path: 'phone_sign' , component: PhoneSignComponent},
  { path: 'phone_login' , component: Phone_loginComponent},
  { path: 'phone_personalInfo' , component: PhonePersonalInfoComponent},
  { path: 'phone_interests' , component: PhoneInterestsComponent},
  { path: 'phone_account' , component: PhoneAccountComponent},
  { path: 'phone_payment' , component: PhonePaymentComponent},
  { path: 'phone_editProfile' , component: PhoneEditProfileComponent},
  { path: 'phone_cart' , component: PhoneCartComponent},
  { path: 'phone_shoppingListManage', component: PhoneShoppingListManageComponent},
  { path: 'phone_shoppingListDelete', component: PhoneShoppingListDeleteComponent},
  { path: 'phone_qrcode', component: PhoneQrCodeComponent},
  { path: 'phone_shop_history', component: PhoneShopHistoryComponent},
  { path: 'phone_shopLocation', component: Phone_shopLocationComponent},
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
