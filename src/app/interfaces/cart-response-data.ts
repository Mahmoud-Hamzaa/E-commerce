import { CartResponseProducts } from "./cart-response-products"


export interface CartResponseData {
    cartOwner:string,
    products:CartResponseProducts[]
    totalCartPrice:number,
    _id:string
   


}
