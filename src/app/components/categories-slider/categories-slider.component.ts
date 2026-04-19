import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../interfaces/category';


@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.css'
})
export class CategoriesSliderComponent implements OnInit {
  constructor(private productServices:ProductsService, private categoriesService:CategoriesService ){}
  categoriesList!:Category[]


 ngOnInit(): void {  

      this.categoriesService.getAllCategories().subscribe({
        next:(response)=>{
          
          this.categoriesList = response.data
        }
      })
    }

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
          items: 6
        }
      },
      nav: false
    }

   
}
