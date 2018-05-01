import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private tostr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  
  updateProfile(formData)
  {
    if(formData.valid)
    {
      this.authService.updateUserProfile(formData.value.name, formData.value.phone)
      .then(function () {
        this.tostr.sucess('Updated Successfully', 'User Profile');
      }).catch(function (error) {
        this.tostr.error(error, 'User Profile Error !');
      });
    }
  }
  onChangePassword(changePwdForm)
  {
    if(changePwdForm.valid)
    {
      this.authService.updateUserProfile(changePwdForm.value.name, changePwdForm.value.phone)
      .then(function () {
        this.tostr.sucess('Updated Successfully', 'User Profile');
      }).catch(function (error) {
        this.tostr.error(error, 'User Profile Error !');
      });
    }
  }
}
