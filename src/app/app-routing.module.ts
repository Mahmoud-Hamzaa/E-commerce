import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { confirmSavingFormsGuard } from './guards/confirm-saving-forms.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShipingAddressComponent } from './components/shiping-address/shiping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UpdateUserPasswordComponent } from './components/update-user-password/update-user-password.component';
import { UpdateUserInfoComponent } from './components/update-user-info/update-user-info.component';

const routes: Routes = [

  {path:"" , redirectTo:"home" , pathMatch:'full'},
  {path:"home" , canActivate :[authGuard],component:HomeComponent ,title:"Home Page"},
  {path:"brands" ,canActivate :[authGuard], component:BrandsComponent , title:"Brands Page"},
  {path:"products" ,canActivate :[authGuard], component:ProductsComponent , title:"Products page"},
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
  {path:"login"   , canDeactivate:[confirmSavingFormsGuard] , canActivate:[noAuthGuard], component:LoginComponent , title:"Login page"},
  {path:"register" , canDeactivate:[confirmSavingFormsGuard]  ,canActivate:[noAuthGuard], component:SignUpComponent, title:"Register page"},
  {path:"forget-password" ,canActivate:[noAuthGuard],  component:ForgetPasswordComponent},
  {path:"verify-code" ,canActivate:[noAuthGuard], component:VerifyCodeComponent},
  {path:"reset-password" ,canActivate:[noAuthGuard], component:ResetPasswordComponent},
  {path:"**" , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
