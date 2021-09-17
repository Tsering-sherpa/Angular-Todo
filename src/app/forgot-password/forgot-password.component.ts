import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public dialogRef: MatDialog) { }

  resetForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern
        ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  })

  // convenience getter for easy access to form fields
  get resetform() { 
    return this.resetForm.controls; 
  }


  openDialog() {
    this.dialogRef.open(ConfirmComponent, {
      width: '388px'
  });
}

ngOnInit(): void {

}
}
