import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'mycart', component: CartComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'mywishlist', component: WishlistComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
