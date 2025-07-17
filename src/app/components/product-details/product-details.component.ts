import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnChanges  , OnDestroy{
  constructor(private activateRoute: ActivatedRoute, private productsServices: ProductsService) { }
  productDetails!: Product
  // product_id!: string | null
  @Input() id!: string
  getSpecificProductSubscription!:Subscription

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,  
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

 
  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null && changes['id'].currentValue != changes['id'].previousValue) {
      this.getSpecificProductSubscription = this.productsServices.getSpecificProduct(this.id).subscribe({
        next: (response) => {
          this.productDetails = response.data



        },
      })
    }

  }

    ngOnDestroy(): void {
    this.getSpecificProductSubscription.unsubscribe()
  }
}
