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
import { ShopLoginComponent} from './pages/shop_login/shop_login.component';
import { FridgeMainComponent } from './pages/fridge_main/fridge_main.component';
import { FridgeCategoryComponent } from './pages/fridge_category/fridge_category.component';
import { FridgeListComponent } from './pages/fridge_list/fridge_list.component';
import { FridgeRecipeComponent } from './pages/fridge_recipe/fridge_recipe.component';
import { DetailPopupComponent } from './pages/detail_popup/detail_popup.component';
import { VoicePopupComponent } from './pages/voice_popup/voice_popup.component';
import { HandPopupComponent } from './pages/hand_popup/hand_popup.component';
import { VirtualTryonComponent } from './pages/virtual_tryon/virtual_tryon.component';
import {PhoneSignComponent} from "./pages/phone_sign/phone_sign.component";
import {Phone_loginComponent} from "./pages/phone_login/phone_login.component";
import {PhonePersonalInfoComponent} from "./pages/phone_personalInfo/phone_personalInfo.component";
import {PhoneInterestsComponent} from "./pages/phone_interests/shop_login.component";
import {PhoneAccountComponent} from "./pages/phone_account/phone_account.component";
import {PhonePaymentComponent} from "./pages/phone_payment/phone_payment.component";
import {PhoneEditProfileComponent} from "./pages/phone_editProfile/shop_login.component";
import {PhoneCartComponent} from "./pages/phone_cart/phone_cart.component";
import {PhoneShoppingListManageComponent} from "./pages/phone_shoppingListManage/phone_shoppingListManage.component";
import {PhoneShoppingListDeleteComponent} from "./pages/phone_shoppingListDelete/phone_shoppingListDelete.component";
import {Phone_shopLocationComponent} from "./pages/phone_shopLocation/phone_shopLocation.component";

const socketIoConfig: SocketIoConfig = { url: environment.host, options: {} };
// @ts-ignore
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
    ShopLoginComponent,
    FridgeMainComponent,
    FridgeCategoryComponent,
    FridgeListComponent,
    FridgeRecipeComponent,
    PhoneSignComponent,
    Phone_loginComponent,
    PhonePersonalInfoComponent,
    PhoneInterestsComponent,
    PhoneAccountComponent,
    PhonePaymentComponent,
    PhoneEditProfileComponent,
    PhoneCartComponent,
    PhoneShoppingListManageComponent,
    PhoneShoppingListDeleteComponent,
    Phone_shopLocationComponent,
    DetailPopupComponent,
    VoicePopupComponent,
    HandPopupComponent,
    VirtualTryonComponent
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
