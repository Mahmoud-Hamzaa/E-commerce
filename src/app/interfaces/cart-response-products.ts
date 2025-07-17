import { CartResponseProductsProduct } from './cart-response-products-product';
import { Product } from './product';

export interface CartResponseProducts {   
count:number,
price:number,
product:CartResponseProductsProduct,
_id:string,
}
