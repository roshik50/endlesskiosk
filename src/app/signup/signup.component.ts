import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private tostr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(JSON.stringify(formData.value));
    if (formData.valid) {
      this.authService.emailSignup(formData.value.email, formData.value.password)
        .then(value => {
          console.log('Sucess', value);
          this.router.navigateByUrl('/home');
        })
        .catch(error => {
          console.log('Something went wrong: ', error);
          this.tostr.error(error, 'User Register Error !');
        });

    }

  }

}
