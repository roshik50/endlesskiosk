import { Component, OnInit,EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedataService } from "../services/sharedata.service";
import { CategoryService } from "../services/category.service";
import { Category } from '../model/category.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catgeoryList: Category[];
  slides = [
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    {img: "assets/images/endless-aisle-kiosk-products/womens-fashion/588751386298.jpg"},
    
  ];
  currentUser: any;
  message:string;
  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService,public catgyService: CategoryService,private data:SharedataService) { }

  ngOnInit() {
    console.log("saoifdsofid");
    if (this.authService.currentUser())
      {
        this. dataSendToHeader(this.authService.currentUser().name);
      //  this.data.currentMessage.subscribe(message => this.message = message);
        let x = this.catgyService.getData();
        x.snapshotChanges().subscribe(item => {
          this.catgeoryList = [];
          item.forEach(element => {
            var y = element.payload.toJSON();
            y["$key"] = element.key;
            this.catgeoryList.push(y as Category);
          }
    
          );
        });
       
      }
      else
      {
        this.signOut();
      }
 
  }

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 3};

  signOut() {
    console.log("logout");
    this.authService.logout().then(() => {
      this.tostr.success('', 'User Logout Successfully');
      this.router.navigateByUrl('/login');
    })
      .catch(error => {
        console.log('Something went wrong: ', error);
        this.tostr.error(error, 'User Register Error !');
      });;
  }

  dataSendToHeader(name) {
   this.data.changeMessage(name);
 }
 
  


}
