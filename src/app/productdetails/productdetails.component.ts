import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SharedataService } from '../services/sharedata.service';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  
  productDetails:Product;
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 4};
  selectedQuantity=1;
  productQuantity=[1,2,3,4,5];
  constructor(private productService:ProductService,private data:SharedataService,private cartService:CartService,private wishlistService:WishlistService) { 
     this.data.currentData.subscribe(data => this.productDetails = data as Product);
  }
  ngOnInit() {
   // let productid=this.route.snapshot.paramMap.get('productid');
  //  this.route.paramMap.subscribe((param:ParamMap)=>{
  //   let productid=param.get('productid');
  //  });

 
  }

  addToCart(product:Product)
  {
     let cartItem=new Cart();
     cartItem.productId=product.$key;               
     cartItem.name=product.name;
     cartItem.price=product.price;
     cartItem.productImageUrl=product.images[0];
     cartItem.quantity=this.selectedQuantity;
     this.cartService.addToCart(cartItem);
  }
  addToWishlist(product:Product)
  {
    //  let cartItem=new Cart();
    //  cartItem.productId=product.$key;               
    //  cartItem.name=product.name;
    //  cartItem.price=product.price;
    //  cartItem.productImageUrl=product.images[0];
    //  cartItem.quantity=this.selectedQuantity;
     this.wishlistService.addToWishlist(product);
  }

}
