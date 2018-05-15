import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable()
export class WishlistService {
  private wishlistItems: Product[] = [];
  constructor() { }

  addToWishlist(item: Product) {
    let itemExist = false;
    this.wishlistItems.forEach(element => {
      if (element.$key === item.$key) {
        // console.log("element.name="+element.name+" item.name="+item.name);
        //  element.quantity++;
        itemExist = true;
        return;
      }
    });

    if (!itemExist) {
      // console.log("get in push operation"+itemExist)
      this.wishlistItems.push(item);
    }
  }

  removeFromWishlist(index) {
    this.wishlistItems.splice(index, 1);
  }

  getWishlistItems() {
    return this.wishlistItems;
  }


}
