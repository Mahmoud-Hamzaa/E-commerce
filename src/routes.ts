import { Routes } from "@angular/router";
import { AllordersComponent } from "./app/components/allorders/allorders.component";
import { BrandsComponent } from "./app/components/brands/brands.component";
import { CartComponent } from "./app/components/cart/cart.component";
import { CategoriesComponent } from "./app/components/categories/categories.component";
import { ForgetPasswordComponent } from "./app/components/forget-password/forget-password.component";
import { HomeComponent } from "./app/components/home/home.component";
import { LoginComponent } from "./app/components/login/login.component";
import { NotfoundComponent } from "./app/components/notfound/notfound.component";
import { ProductDetailsComponent } from "./app/components/product-details/product-details.component";
import { ProductsComponent } from "./app/components/products/products.component";
import { ResetPasswordComponent } from "./app/components/reset-password/reset-password.component";
import { ShipingAddressComponent } from "./app/components/shiping-address/shiping-address.component";
import { SignUpComponent } from "./app/components/sign-up/sign-up.component";
import { UpdateUserInfoComponent } from "./app/components/update-user-info/update-user-info.component";
import { UpdateUserPasswordComponent } from "./app/components/update-user-password/update-user-password.component";
import { UserprofileComponent } from "./app/components/userprofile/userprofile.component";
import { VerifyCodeComponent } from "./app/components/verify-code/verify-code.component";
import { authGuard } from "./app/guards/auth.guard";
import { noAuthGuard } from "./app/guards/no-auth.guard";

export const routes: Routes = [

  {path:"" , redirectTo:"home" , pathMatch:'full'},
  {path:"home" , canActivate :[authGuard],component:HomeComponent ,title:"Home Page"},
  {path:"brands" ,canActivate :[authGuard], component:BrandsComponent , title:"Brands Page"},
  {path:"products" ,canActivate :[authGuard], loadComponent: () => import("./app/components/products/products.component").then((c) => c.ProductsComponent), title:"Products page"},
  {path:"categories" ,canActivate :[authGuard], component:CategoriesComponent , title:"Categories page"},
  {path:"userprofile" ,canActivate :[authGuard], component:UserprofileComponent , title:"profile page",
    children:
    [
      {path:"" , redirectTo:"update-user-password" , pathMatch:'full'},
      {path:"update-user-password" , component:UpdateUserPasswordComponent , title:"update-user-password"},
      {path:"update-user-info" , component:UpdateUserInfoComponent , title:"update-user-info"},


    ]
  },
  {path:"allorders" ,canActivate :[authGuard], component:AllordersComponent , title:"allorders page"},
  {path:"cart" , canActivate :[authGuard],component:CartComponent , title:"Cart Page"},
  {path:"product-details/:id" ,canActivate:[authGuard] , component:ProductDetailsComponent},
  {path:"shiping-address/:cartId/:paymentType" ,canActivate:[authGuard] , component:ShipingAddressComponent},
  {path:"login"    , canActivate:[noAuthGuard], component:LoginComponent , title:"Login page"},
  {path:"register"   ,canActivate:[noAuthGuard], component:SignUpComponent, title:"Register page"},
  {path:"forget-password" ,canActivate:[noAuthGuard],  component:ForgetPasswordComponent},
  {path:"verify-code" ,canActivate:[noAuthGuard], component:VerifyCodeComponent},
  {path:"reset-password" ,canActivate:[noAuthGuard], component:ResetPasswordComponent},
  {path:"**" , component:NotfoundComponent},
];