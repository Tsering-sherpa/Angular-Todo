import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/user/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  spinner = false;
  hide = true;
  allUser: any;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern
        ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),


    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
    ])
  })

  // convenience getter for easy access to form fields
  get form() { return this.loginForm.controls; }


  logInUser() {
    this._userService.getUser().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password
      });
      if (user) {
        console.log("welcome to dashboard user")
        localStorage.setItem('token', user.name)
        this.spinner = true;
        setTimeout(() => {
          this.router.navigate([''])
          this.spinner = false;
        }, 1500
        );
      }
      else {
        alert("user not found")
      }
    },
      err => {
        alert("Some thing went wrorng !!")
      })
  }

  constructor(public router: Router, public _userService: ApiService) {

  }

  ngOnInit(): void {

  }

}
