import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { AuthService } from '../../services/auth.service';
import { ProductComponent } from '../product/product.component';
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategoriesSliderComponent } from "../categories-slider/categories-slider.component";


@Component({
  standalone:true,
  imports: [ProductComponent, MainSliderComponent, CategoriesSliderComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productsService = inject(ProductsService)
  authService = inject(AuthService)

  productsList!:Product[]


  ngOnInit(): void {

    try {
     
      
      
      this.productsService.getAllProducts().subscribe({
        next:(response)=>{
         
          this.productsList = response.data;
          }, 
        error(err) {
          console.log("the error",err);
          
        },  
      })


    } 
    catch (error) 
    {
      console.log(error);
      
    }

    
   
  }
  
 
}
