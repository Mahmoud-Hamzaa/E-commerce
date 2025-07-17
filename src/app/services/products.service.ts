import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
  getSpecificProduct(id:String):Observable<any>
  {
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getAllBrands():Observable<any>
  {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
}
