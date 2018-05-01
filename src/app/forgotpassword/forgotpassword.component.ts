import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private tostr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(formData)
  {
    if(formData.valid) {
      this.authService.sendPasswordResetEmail(formData.value.email)
      .then(() => {
        this.tostr.success('Please check your mail', 'Check Email');
        this.router.navigateByUrl('/login-email');
      }).catch(error => {
        console.log('Something went wrong: ', error);
        this.tostr.error(error, 'Error !');
      });        
    }

  }
}
