import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private tostr: ToastrService) { }

  ngOnInit() {
  }
  onSignin(formData)
  {
    if(formData.valid) {
      this.authService.emailSignin(formData.value.email,formData.value.password)
      .then(() => {
            this.router.navigateByUrl('/profile');
          })
          .catch(error => {
            console.log('Something went wrong: ', error);
            this.tostr.error(error, 'Login Error !');
          });
    }

  }

}
