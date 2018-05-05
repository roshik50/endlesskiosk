import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }
  getData() {
    this.productList = this.firebase.list('products');
    return this.productList;
  }
  insertCategory(product: Product) {
    this.productList.push(
      {
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        images: product.images,
        isRecalled: product.isRecalled,
        rating: product.rating,
        category: product.category
      }
    );
  }
  updateCategory(product: Product) {
    this.productList.update(product.$key,
      {
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        images: product.images,
        isRecalled: product.isRecalled,
        rating: product.rating,
        category: product.category
      }
    );
  }
  deleteCategory(key: string) {
    console.log("key value ++" + key);
    this.productList.remove(key);
  }

}
