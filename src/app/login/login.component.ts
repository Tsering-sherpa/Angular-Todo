import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
      email : new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.pattern
        ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        
        
      password: new FormControl('', [
        Validators.required, 
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ])
    })

    get email(){
      return this.loginForm.get('email');
    }

    logInUser(){
      if (this.loginForm.get('email')?.value=="test@gmail.com" && this.loginForm.get('password')?.value=="Nep@1234"){    
        console.log("welcome to dashboard user")
        this.router.navigate([''])
      }
      else{
        console.log("you are not welcome")
      }
    }

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    
  }

}
