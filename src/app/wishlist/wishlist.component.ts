import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { WishlistService } from '../services/wishlist.service';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedataService } from '../services/sharedata.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  productList: Product[];
  cartItem: Cart;
  constructor(private wishlistService:WishlistService,private router: Router, private tostr: ToastrService, private data: SharedataService,public cartService:CartService) { }

  ngOnInit() {
    this.productList=this.wishlistService.getWishlistItems();
  }

  addToCart(product:Product,index)
  {
     this.cartItem=new Cart();
     this.cartItem.productId=product.$key;               
     this.cartItem.name=product.name;
     this.cartItem.price=product.price;
     this.cartItem.productImageUrl=product.images[0];
     this.cartItem.quantity=1;
     this.cartService.addToCart(this.cartItem);
     this.wishlistService.removeFromWishlist(index);
     console.log( this.cartService.getCartItems().length);
  }

  selectedProduct(product)
  {
    this.data.changeData(product);
    this.router.navigate(['/productdetails']);
  }
  removeItem($index){
    this.wishlistService.removeFromWishlist($index);
  }

}
