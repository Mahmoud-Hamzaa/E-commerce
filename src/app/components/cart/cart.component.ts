import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartResponse } from '../../interfaces/cart-response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit , OnDestroy{

  cartQuantity!:number
  cartDetails:CartResponse | null = null 
  ClearCartSubscription!:Subscription
  updateCartProductQuantitySubscription!:Subscription
  DeleteProductFromCartSubscription!:Subscription
  getLoggedUserCartSubscription!:Subscription
  cartServices= inject(CartService)
  
    ngOnInit(): void {
      this.getLoggedUserCartSubscription = this.cartServices.getLoggedUserCart().subscribe({
        next:(response)=>{console.log(response);
          this.cartDetails= response 
        },
        error:(err)=>{console.log(err);
        }
      })
  }

  handleDeleteProductFromCart(id:string)
  {
   this.DeleteProductFromCartSubscription = this.cartServices.removeSpecificCartItem(id).subscribe({
      next:(response)=>{console.log(response);
        this.cartDetails=response
        this.cartServices.cartItemsQuantitySubject.next(response.numOfCartItems)
      },
      error:(err)=>{console.log(err);
      }
    })
  }

  handleQuantityUpdated(id:string ,count:number)
   {
      this.updateCartProductQuantitySubscription = this.cartServices.updateCartProductQuantity(id ,count).subscribe({
        next:(response)=>{console.log(response);
          this.cartDetails=response
        },
        error:(err)=>{console.log(err);
        }
      })
  }

  handleClearCart()
  {
    this.ClearCartSubscription=this.cartServices.clearUserCart().subscribe({
      next:(response)=>{console.log(response);
        this.cartDetails=null
        this.cartServices.cartItemsQuantitySubject.next(0)
      },
      error:(err)=>{console.log(err);
      }
    })
  }


  ngOnDestroy(): void {
    if (this.ClearCartSubscription!=undefined) {
      this.ClearCartSubscription.unsubscribe()
    }
    if ( this.updateCartProductQuantitySubscription!=undefined) {
      this.updateCartProductQuantitySubscription.unsubscribe()
    }
    if (this.DeleteProductFromCartSubscription!=undefined) {
      this.DeleteProductFromCartSubscription.unsubscribe()
    }
    if (this.getLoggedUserCartSubscription!=undefined) {
       this.getLoggedUserCartSubscription.unsubscribe()
    }
      
     
      
     
  }

}
