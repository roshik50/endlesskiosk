import { Component, OnInit } from '@angular/core';
import { SharedataService } from "../services/sharedata.service";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message:string;

  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService,private data: SharedataService) { }
  ngOnInit() {
   this.data.currentMessage.subscribe(message => this.message = message)

  }

  signOut() {
    console.log("logout");
    this.authService.logout().then(() => {
      this.data.changeMessage("");
      this.tostr.success('', 'User Logout Successfully');
      this.router.navigateByUrl('/index');
    })
      .catch(error => {
        console.log('Something went wrong: ', error);
        this.tostr.error(error, 'User Register Error !');
      });;
  }
  
}
