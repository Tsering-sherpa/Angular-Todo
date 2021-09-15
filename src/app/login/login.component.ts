import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  spinner = false;
  hide = true;

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
    if (this.loginForm.get('email')?.value == "test@gmail.com" && this.loginForm.get('password')?.value == "Nep@1234") {
      console.log("welcome to dashboard user")
      this.spinner = true;
      setTimeout(()=>{
        this.router.navigate([''])
        this.spinner = false;
      },2500
      );
    }
    else {
      console.log("you are not welcome")
    }
  }

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

}
