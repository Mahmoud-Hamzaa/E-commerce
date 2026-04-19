import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { __values } from 'tslib';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone:true,
  imports:[RouterLink , RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit , OnDestroy {
  constructor(private authService: AuthService , private cartService:CartService ){}


  cartItemsQuantitySubjectSubscription!:Subscription
  isLoggedInSubscription!:Subscription
  UserNameSubjSubscription!:Subscription

  // loggedInUser!:string |null
  isLoggedInUser!:boolean
  loggedInUserName!:string|null
  userCartItemsNumbers!:number
  ngOnInit(): void {

    this.cartService.getUpdatedCartItemsNumbers()

    this.cartItemsQuantitySubjectSubscription = this.cartService.cartItemsQuantitySubject.subscribe({
      next:(value)=> {this.userCartItemsNumbers = value}
    })

  this.UserNameSubjSubscription =this.authService.userNameSubject.subscribe({
    next:(value)=>{
      this.loggedInUserName = value
    }

  }
  )
   this.isLoggedInSubscription = this.authService.isLoggedIn.subscribe({
      next:(value)=>{this.isLoggedInUser=value}
    })
  
    // this.authService.userNameSubject.next(this.authService.getUserName())

    // this.UserNameSubscription = this.authService.userName.subscribe({
    //   next:(value:string)=>{this.loggedInUserName=value}
    // })
    // console.log(this.loggedInUserName);
    
  }

  
  logout()
  {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.cartItemsQuantitySubjectSubscription.unsubscribe() 
    this.isLoggedInSubscription.unsubscribe()
    this.isLoggedInSubscription.unsubscribe()
  }
}
