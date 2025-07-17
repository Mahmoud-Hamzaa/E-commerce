import { CartResponseProducts } from "./cart-response-products"
import { Product } from "./product"

export interface CartResponseData {
    cartOwner:string,
    products:CartResponseProducts[]
    totalCartPrice:number,
    _id:string
   


}
