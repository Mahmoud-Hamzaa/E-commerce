import { CartService } from './../../services/cart.service';
import { Product } from './../../interfaces/product';
import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnDestroy {
  constructor(private router: Router, private cartServices: CartService) { }

  @Input({ required: true }) product!: Product

  addProductToCartSubscrption!: Subscription

  handleAddToCart(id: string) {
    this.addProductToCartSubscrption = this.cartServices.addProductToCart(id).subscribe({
      next: (response) => { 
        console.log(response)
        this.cartServices.cartItemsQuantitySubject.next(response.numOfCartItems)
       },
      error: (err) => { console.log(err) }
    })
   
  }

  ngOnDestroy(): void {

    if (this.addProductToCartSubscrption != undefined) {

      this.addProductToCartSubscrption.unsubscribe()
    }

  }


}
