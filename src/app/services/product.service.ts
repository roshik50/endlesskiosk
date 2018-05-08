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
  insertProduct(product: Product) {
    this.productList.push(
      {
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        images: product.images,
        isRecalled: product.isRecalled,
        rating: product.rating,
        categories: product.categories,
        isTrended: product.isTrended
      }
    );
  }
  updateProduct(product: Product) {
    this.productList.update(product.$key,
      {
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        images: product.images,
        isRecalled: product.isRecalled,
        rating: product.rating,
        category: product.categories,
        isTrended: product.isTrended
      }
    );
  }
  deleteProduct(key: string) {
    console.log("key value ++" + key);
    this.productList.remove(key);
  }

}
