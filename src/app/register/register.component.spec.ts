import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [ ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    //for checking an name
    it('[Name Check] - should check user name is invalid', () => {
      let name = component.registerForm.controls['name'];
      expect(name.valid).toBeFalsy();
      expect(name.pristine).toBeTruthy();
      expect(name.errors).toBeTruthy();
      name.setValue('');
    });
    it('[Name Check] -should check users name is entered', () => {
      let name = component.registerForm.controls['name'];
      name.setValue('Tsering Sherpa');
      expect(name.errors).toBeNull();
    });
  //for checking an email
  it('[Email Check] - should check user email address is invalid', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors).toBeTruthy();
    email.setValue('abc');
  });
  it('[Email Check] -should check users corrent email address is entered', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('test@gmail.com');
    expect(email.errors).toBeNull();
  });
  //for checking an DOB
  it('[DOB Check] - should check user birthdate is invalid', () => {
    let dob = component.registerForm.controls['dob'];
    expect(dob.valid).toBeFalsy();
    expect(dob.pristine).toBeTruthy();
    expect(dob.errors).toBeTruthy();
    dob.setValue('');
  });
  it('[DOB Check] -should check users birthdate is entered', () => {
    let dob = component.registerForm.controls['dob'];
    dob.setValue('9/14/2021');
    expect(dob.errors).toBeNull();
  });
  //for checking an phone
  it('[Phone Check] - should check user phone is invalid', () => {
    let phone = component.registerForm.controls['phone'];
    expect(phone.errors).toBeTruthy();
    phone.setValue('');
  });
  it('[Phone Check] -should check users phone is entered', () => {
    let phone = component.registerForm.controls['phone'];
    phone.setValue('9858587');
    expect(phone.errors).toBeNull();
  });
  
  //test case for form
  it('[Form Check] - should check form is valid or not if no values entered', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('[Form Check] - should check form is valid or not wheen values entered', () => {
    component.registerForm.setValue({
      name: 'Tsering Sherpa',
      email: 'test@gmail.com',
      dob: '10/10/2001',
      country: 'Nepal',
      phone: '98334533'
  });

    expect(component.registerForm.valid).toBeTruthy();
  });
});
