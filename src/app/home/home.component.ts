import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedataService } from "../services/sharedata.service";
import { CategoryService } from "../services/category.service";
import { ProductService } from "../services/product.service";
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartItem:Cart;
  categoryList: Category[];
  productList: Product[];
  selectedCategoryProductList: Product[];
  currentUser: any;
  message: string;
  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService, public catgyService: CategoryService, private data: SharedataService, public productService: ProductService,public cartService:CartService) { }

  ngOnInit() {
    if (this.authService.currentUser()) {
      this.dataSendToHeader(this.authService.currentUser().name);
      //  this.data.currentMessage.subscribe(message => this.message = message);
      let categorysData = this.catgyService.getData();
      categorysData.snapshotChanges().subscribe(item => {
        this.categoryList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.categoryList.push(y as Category);
        }

        );
      });

      let productsData = this.productService.getData();
      productsData.snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.productList.push(y as Product);
        }
        );
        this.selectedCategoryProductList=this.productList.filter(value=>value.$key==value.$key);
      });

    }
    else {
      this.signOut();
    }

  }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 3 };

  signOut() {
    console.log("logout");
    this.authService.logout().then(() => {
      this.tostr.success('', 'User Logout Successfully');
      this.router.navigateByUrl('/index');
    }) .catch(error => {
        console.log('Something went wrong: ', error);
        this.tostr.error(error, 'User Register Error !');
      });
  }

  dataSendToHeader(name) {
    this.data.changeMessage(name);
  }

  getSelectedCategory(categoryId) {
    this.selectedCategoryProductList=[];
    this.productList.forEach(element => {
      for (let category in element.categories) {
        console.log("sdlfl+++"+category);
        if (category === categoryId) {
          this.selectedCategoryProductList.push(element);
          break;
        }
      }
    });
  }

  addToCart(product)
  {
     this.cartItem=new Cart();
     this.cartItem.name=product.name;
     this.cartItem.price=product.price;
     this.cartItem.quantity=1;
     this.cartService.addToCart(this.cartItem);
     console.log( this.cartService.getCartLength());
  }



}
