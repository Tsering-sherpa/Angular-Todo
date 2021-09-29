import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //for checking an email
  it('[Email Check] - should check user email address is invalid', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors).toBeTruthy();
    email.setValue('abc');
  });
  it('[Email Check] -should check users corrent email address is entered', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('test@gmail.com');
    expect(email.errors).toBeNull();
  });
  //for checking password 
  it('[Password Check] - should check password errors', () => {
    let password = component.loginForm.controls['password'];
    expect(password.errors).toBeTruthy();
    password.setValue("hell123");

  });
  it('[Password Check] - should check password errors', () => {
    let password = component.loginForm.controls['password'];
    password.setValue("Nep@1234");
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  });
  //test case for form
  it('[Form Check] - should check form is valid or not if no values entered', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('[Form Check] - should check form is valid or not wheen values entered', () => {
    component.loginForm.controls['email'].setValue('test@gmail.com');
    component.loginForm.controls['password'].setValue('Nep@1234');

    expect(component.loginForm.valid).toBeTruthy();
  });
  //for checking if button is disabled or not
  it('[Form Submit] - should check form is submitted', () => {
    //check form is invaid
    expect(component.loginForm.invalid).toBeTruthy();
    let button = fixture.debugElement.query(By.css('button[type=submit]'));
    //check button is disabled
    expect(button.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['email'].setValue('test@gmail.com');
    component.loginForm.controls['password'].setValue('Nep@1234');
    fixture.detectChanges();
    //check button is enabled
    expect(button.nativeElement.disabled).toBeFalsy();
    component.logInUser();
    fixture.detectChanges();
  });
  //for checking router navigation works or not
  it('[Router Navigation] - should not redirect to dashboard after failure login', ()=>{
    component.loginForm.setValue({email: '', password: ''});
    spyOn(component.router, 'navigate');
    component.logInUser();
    expect(component.router.navigate).not.toHaveBeenCalled();
  });

});
