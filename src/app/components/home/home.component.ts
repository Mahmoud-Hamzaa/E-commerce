import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
import { DecodedToken } from '../../interfaces/decoded-token';

@Component({
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
