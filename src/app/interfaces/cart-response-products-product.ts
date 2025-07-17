import { Brand } from "./brand";
import { Category } from "./category";
import { SubCategory } from "./sub-category";

export interface CartResponseProductsProduct {
    barnd:Brand,
    category:Category,
    
    imageCover:string,
    quantity:number,
    ratingsAverage:number,
    subcategory:SubCategory,
    title:string,
    _id:string,



}
