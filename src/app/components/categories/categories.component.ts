import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit  {



  categoriesServices = inject(CategoriesService)

  getAllCategoriesSubscription!:Subscription
  categoriesList!:Category[]

  ngOnInit(): void {
    this.categoriesServices.getAllCategories().subscribe({
      next:(response)=>{
        console.log(response);
        this.categoriesList = response.data
        console.log("categ" + this.categoriesList);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  // ngOnDestroy(): void {
  //   this.getAllCategoriesSubscription.unsubscribe()
  // }

}
