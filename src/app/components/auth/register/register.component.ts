import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/user/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private _userService: ApiService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',
        Validators.required,
      ],
      gender: ['',
        Validators.required
      ],
      dob: ['',
        Validators.required,
      ],
      country: ['',
        Validators.required
      ],
      phone: ['',
        Validators.required,
        Validators.minLength(5)
      ],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern
          ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    })
  }

  // convenience getter for easy access to form fields
  get registerform() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this._userService.registerData = this.registerForm.value;
    this.router.navigate(['/set-password']);
  }

}