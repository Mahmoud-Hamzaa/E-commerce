import { Subscription } from 'rxjs';
import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit , OnDestroy{
  constructor(private productService:ProductsService){}


  allProductsList!:Product[]
  getAllProductsSubscription!:Subscription  

  ngOnInit(): void {
    this.getAllProductsSubscription = this.productService.getAllProducts().subscribe({
      next:(response)=>{
        this.allProductsList = response.data
      },
      error:(err)=>{console.log(err);
      }
    })
  }


    ngOnDestroy(): void {
      if (this.getAllProductsSubscription!=undefined) {
        this.getAllProductsSubscription.unsubscribe()
      }
  }

}
