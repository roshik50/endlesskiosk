import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:string;

  constructor(private authService: AuthService, private router: Router, private tostr: ToastrService,private cartService: CartService,private wishlistService:WishlistService) { }
  ngOnInit() {
   //this.data.currentMessage.subscribe(message => this.message = message)
   console.log("Current user data"+this.wishlistService.getWishlistItems());
 
  }

  signOut() {
    console.log("logout");
    this.authService.logout().then(() => {
      this.tostr.success('', 'User Logout Successfully');
      this.router.navigateByUrl('/index');
    })
      .catch(error => {
        console.log('Something went wrong: ', error);
        this.tostr.error(error, 'User Register Error !');
      });;
  }
  
}
