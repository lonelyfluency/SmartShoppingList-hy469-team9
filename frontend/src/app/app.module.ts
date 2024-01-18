import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './global/services/category/category.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ItemPreviewComponent } from './pages/item-shop/item-preview/item-preview.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { TopBarComponent } from './pages/components/top-bar/top-bar.component';
import { DateTimeComponent } from './pages/components/date-time/date-time.component';
import { ProfileComponent } from './pages/components/profile/profile.component';
import { ShoppinglistShopComponent } from './pages/components/shoppinglist-shop/shoppinglist-shop.component';
import { RecommendShopComponent } from './pages/components/recommend-shop/recommend-shop.component';
import { BestsellerShopComponent } from './pages/components/bestseller-shop/bestseller-shop.component';
import { CartShopComponent } from './pages/components/cart-shop/cart-shop.component';
import { ProductsShopComponent } from './pages/components/products-shop/products-shop.component';
import { ShopMainComponent } from './pages/shop_main/shop_main.component';
import { ShopProductsComponent } from './pages/shop_products/shop_products.component';
import { ShopOfferComponent } from './pages/shop_offer/shop_offer.component';
import { ShopCartComponent } from './pages/shop_cart/shop_cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { GraphComponent } from './pages/components/graph/graph.component';
import { ShopLoginComponent} from './pages/shop_login/shop_login.component';
import { FridgeMainComponent } from './pages/fridge_main/fridge_main.component';
import { FridgeCategoryComponent } from './pages/fridge_category/fridge_category.component';
import { FridgeListComponent } from './pages/fridge_list/fridge_list.component';
import { FridgeRecipeComponent } from './pages/fridge_recipe/fridge_recipe.component';
import {FridgeShoppingListDeleteComponent} from "./pages/fridge_shoppingListDelete/fridge_shoppingListDelete.component";
import { DetailPopupComponent } from './pages/detail_popup/detail_popup.component';
import { VoicePopupComponent } from './pages/voice_popup/voice_popup.component';
import { HandPopupComponent } from './pages/hand_popup/hand_popup.component';
import { VirtualTryonComponent } from './pages/virtual_tryon/virtual_tryon.component';
import { PhoneSignComponent } from "./pages/phone_sign/phone_sign.component";
import { PhoneLoginComponent } from "./pages/phone_login/phone_login.component";
import { PhonePersonalInfoComponent } from "./pages/phone_personalInfo/phone_personalInfo.component";
import { PhoneInterestsComponent } from "./pages/phone_interests/phone_interests.component";
import { PhoneAccountComponent } from "./pages/phone_account/phone_account.component";
import { PhonePaymentComponent } from "./pages/phone_payment/phone_payment.component";
import { PhoneEditProfileComponent } from "./pages/phone_editProfile/shop_login.component";
import { PhoneCartComponent } from "./pages/phone_cart/phone_cart.component";
import { PhoneShoppingListManageComponent } from "./pages/phone_shoppingListManage/phone_shoppingListManage.component";
import { PhoneShoppingListDeleteComponent } from "./pages/phone_shoppingListDelete/phone_shoppingListDelete.component";
import { PhoneShopLocationComponent } from "./pages/phone_shopLocation/phone_shopLocation.component";
import { PhoneQrCodeComponent } from "./pages/phone_qrcode/phone_qrcode.component";
import { PhoneShopHistoryComponent } from "./pages/phone_shopHistory/phone_shopHistory.component";
import {PhoneMyCartDeleteComponent} from "./pages/phone_cartDelete/phone_cart_delete.component";
import { CartComponent } from './pages/cart/cart.component';
import { SearchResultComponent } from './pages/components/search-result/search-result.component';
import { ShopSearchComponent } from './pages/shop_search/shop_search.component';
import { ShoppinglistComponent } from './pages/shoppinglist/shoppinglist.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { RecipeComponent } from './pages/components/recipe/recipe.component';
import { ShoppinglistPhoneComponent } from './pages/shoppinglist_phone/shoppinglist_phone.component';
import { CartPhoneComponent } from './pages/cart_phone/cart_phone.component';


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
    DateTimeComponent,
    ProfileComponent,
    ShoppinglistShopComponent,
    RecommendShopComponent,
    BestsellerShopComponent,
    CartShopComponent,
    ProductsShopComponent,
    ShopMainComponent,
    ShopProductsComponent,
    ShopOfferComponent,
    ShopCartComponent,
    ShopComponent,
    GraphComponent,
    ShopLoginComponent,
    FridgeMainComponent,
    FridgeCategoryComponent,
    FridgeListComponent,
    FridgeRecipeComponent,
    FridgeShoppingListDeleteComponent,
    PhoneSignComponent,
    PhoneLoginComponent,
    PhonePersonalInfoComponent,
    PhoneInterestsComponent,
    PhoneAccountComponent,
    PhonePaymentComponent,
    PhoneEditProfileComponent,
    PhoneCartComponent,
    PhoneMyCartDeleteComponent,
    PhoneShoppingListManageComponent,
    PhoneShoppingListDeleteComponent,
    PhoneShopLocationComponent,
    PhoneQrCodeComponent,
    PhoneShopHistoryComponent,
    DetailPopupComponent,
    VoicePopupComponent,
    HandPopupComponent,
    VirtualTryonComponent,
    CartComponent,
    SearchResultComponent,
    ShopSearchComponent,
    ShoppinglistComponent,
    InventoryComponent,
    RecipeComponent,
    ShoppinglistPhoneComponent,
    CartPhoneComponent
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
