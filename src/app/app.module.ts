import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinnerInterceptor } from './interceptors/spinner.interceptor';

import { ShipingAddressComponent } from './components/shiping-address/shiping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UpdateUserInfoComponent } from './components/update-user-info/update-user-info.component';
import { UpdateUserPasswordComponent } from './components/update-user-password/update-user-password.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoriesSliderComponent,
    MainSliderComponent,
    ShipingAddressComponent,
    AllordersComponent,
    UserprofileComponent,
    UpdateUserInfoComponent,
    UpdateUserPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSpinnerModule
  
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor,spinnerInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
