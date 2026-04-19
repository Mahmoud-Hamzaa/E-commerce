import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Brand } from '../../interfaces/brand';

@Component({
  standalone:true,
  imports:[],
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit , OnDestroy {
  constructor(private productService:ProductsService){}


  getAllBrandsSubscription!:Subscription
  allBrandsList!:Brand[]


  ngOnInit(): void {
     this.getAllBrandsSubscription = this.productService.getAllBrands().subscribe({
      next:(response)=>{
        this.allBrandsList = response.data
      }
    })
  }

  ngOnDestroy(): void {
    if (this.getAllBrandsSubscription!=undefined) {
      
      this.getAllBrandsSubscription.unsubscribe()
    }
  }
}
