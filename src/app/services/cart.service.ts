import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }


  cartItemsQuantitySubject = new BehaviorSubject<number>(0)
  

  addProductToCart(id:string):Observable<any>
  {

    return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:id}  )
    
  }
  getLoggedUserCart():Observable<any>
  {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart" )
  }
  
  removeSpecificCartItem(id:string):Observable<any>
  {
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` )
  }

  updateCartProductQuantity(id:string , count:number):Observable<any>
  {
    return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count}
    )
  }

  clearUserCart():Observable<any>
  {
    return this.httpClient.delete("https://ecommerce.routemisr.com/api/v1/cart") 
  }
  getUpdatedCartItemsNumbers()
  {
    this.getLoggedUserCart().subscribe({
      next:(response)=>{
        this.cartItemsQuantitySubject.next(response.numOfCartItems)
        
        
      }
    })
  }
}
