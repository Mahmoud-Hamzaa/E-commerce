import { Component, inject, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';



@Component({
  standalone:true,
  imports:[ReactiveFormsModule],
  selector: 'app-shiping-address',
  templateUrl: './shiping-address.component.html',
  styleUrl: './shiping-address.component.css'
})

export class ShipingAddressComponent implements OnDestroy {

  isLoading=false
  CheckoutsessionSubscription!:Subscription
  cashOrderSubscription!:Subscription

  orederService = inject(OrderService) 
  cartService = inject(CartService) 
  router = inject(Router)

  @Input() cartId!:string
  @Input() paymentType!:string

  shipingAddressFormObj:FormGroup = new FormGroup({
    details:new FormControl("" , [Validators.required]),
    phone:new FormControl("" , [Validators.required]),
    city:new FormControl("" , [Validators.required]),
  })


  onlinePayment()
  {
   this.isLoading=true
   if (this.paymentType=='card') 
    {
      this.CheckoutsessionSubscription = this.orederService.Checkoutsession(this.shipingAddressFormObj.value ,this.cartId).subscribe({
      next:(response)=>{
        console.log(response)
        this.redirectTopaymentPage(response.session.url)
        this.isLoading=false
      },
      error:(err)=>{
        console.log(err)
        this.isLoading=false
        this.router.navigate(['/cart'])

      }
     })
    }
   else if(this.paymentType=='cash')
   {
    this.cashOrderSubscription = this.orederService.CashOrder(this.shipingAddressFormObj.value , this.cartId).subscribe({
      next:(response)=>{
        this.isLoading=false
        console.log(response);
        this.cartService.cartItemsQuantitySubject.next(0)
        this.router.navigate(['/allorders'])
      },
      error:(err)=>{
        this.isLoading=false
        console.log(err)
        this.router.navigate(['/cart'])
        
      }

    })
   }
   
  }



  redirectTopaymentPage(url:string)
  {
   window.location.href = url
   
  }

  ngOnDestroy(): void {
    this.CheckoutsessionSubscription.unsubscribe()
    this.cashOrderSubscription.unsubscribe()
  }

}
