import { Cart } from "./cart.model";

export class User {
    public uid:string;
    public name:string;
    public email:string;
    public photoUrl:string;
    public cartItems:Cart[];
    public wishListItemCount:number;
        
}
