import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import {WishlistService} from './services/wishlist.service';
import { SharedataService } from "./services/sharedata.service";
import { CategoryService } from "./services/category.service";


import { environment } from '../environments/environment';

import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SlickModule } from 'ngx-slick';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    ProfileComponent,
    ForgotpasswordComponent,
    HomeComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductdetailsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,    
    ToastrModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [AuthService,SharedataService,ProductService,CartService,WishlistService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
