import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/shared/model/user.model';
import { MustMatch } from 'src/shared/validator/mustmatch';
import { ApiService } from '../service/user/api.service';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {

  setPasswordForm!: FormGroup;
  submitted = false;
  hide = true;
  hideconfirm = true;
  registerData : any;

  userModelObj : UserModel = new UserModel();

  constructor(private formBuilder: FormBuilder, private _userService: ApiService, private router : Router) { }

  ngOnInit() {
    this.setPasswordForm = this.formBuilder.group({
      password: ['',
        [Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ]],
      confirmPassword: ['',
        [Validators.required,
          Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
        ]]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.setPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.registerData = this._userService.registerData;

    this.userModelObj.name = this.registerData.name;
    this.userModelObj.gender = this.registerData.gender;
    this.userModelObj.dob = this.registerData.dob;
    this.userModelObj.country = this.registerData.country;
    this.userModelObj.phone = this.registerData.phone;
    this.userModelObj.email = this.registerData.email;
    this.userModelObj.password = this.setPasswordForm.value.password;

    this._userService.postUser(this.userModelObj).
      subscribe(res => {
        console.log(res);
        console.log("User added successfully")
        this.router.navigate(['/login']);
      },
        err =>
          console.log("Something went wrong" + err))
          this.router.navigate(['/register']);
    console.log(this.setPasswordForm.value.password)
  }

}


