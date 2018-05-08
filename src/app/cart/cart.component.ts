import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Cart[];
  constructor(public cartService:CartService) { }

  ngOnInit() {
    this.cartItems=this.cartService.getCartItems();
  }
  removeItem($index){
    this.cartService.removeFromCart($index);
  }


}
