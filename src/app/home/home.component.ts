import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedataService } from "../services/sharedata.service";
@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  @Output()childEvent=new EventEmitter();
  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService) { }

  ngOnInit() {
    console.log("saoifdsofid");
    if (this.authService.currentUser())
      {
      this.currentUser = this.authService.currentUser();
      this.firetoParentComponent('roshik text');
      }
      else{
       this.signOut();
      }
  }

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

  firetoParentComponent(value:string)
  {
    console.log("saoifdsofid"+value);
    this.childEvent.emit(value);
  }

}
