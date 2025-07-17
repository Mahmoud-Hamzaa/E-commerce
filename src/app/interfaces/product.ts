import { Brand } from "./brand";
import { Category } from "./category";
import { SubCategory } from "./sub-category";

export interface Product {
    sold?:number,
    images?:string[],
    ratingsQuantity?:number,
    description?:string,
    price?:number,
    id:string,
    imageCover:string,
    createdAt:string,
    quantity:number,
    ratingsAverage:number,
    slug:string,
    title:string,
    updatedAt:string,
    _id:string,
    category:Category,
    brand:Brand,
    subcategory:SubCategory[],







}
