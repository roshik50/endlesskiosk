import { Component, OnInit,EventEmitter } from '@angular/core';
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
  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService,private data: SharedataService) { }

  ngOnInit() {
    console.log("saoifdsofid");
    if (!this.authService.currentUser())
      {
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

  dataSendToHeader(email) {
    this.data.changeMessage(email);
  }


}
