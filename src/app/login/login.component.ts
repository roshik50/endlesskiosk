import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private tostr: ToastrService) { }
 
  ngOnInit() {}
 
  loginGoogle() {
    this.authService.googleLogin().then(value => {
          console.log('Sucess', value),
            console.log('The given name is ' + value.additionalUserInfo.profile.given_name),
            this.router.navigateByUrl('/home');
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
          this.tostr.error(error, 'Login Error !');
        });
  }
  loginFacebook(){
   var val= this.authService.doFacebookLogin();
   console.log("facrbook Authentucation+++++++++++++"+JSON.stringify(val));
  }

}
