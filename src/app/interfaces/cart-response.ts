import { CartResponseData } from "./cart-response-data"

export interface CartResponse {
    cartId:string,
    numOfCartItems:number,
    status:String
    data:CartResponseData

}
