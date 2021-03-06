import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NagivationComponent } from './components/nagivation/nagivation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule} from "@angular/material/chips";
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './components/auth/register/register.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { ConfirmComponent } from './components/dialogs/confirm/confirm.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SetpasswordComponent } from './components/auth/setpassword/setpassword.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTaskDialogComponent } from './components/dialogs/create-task-dialog/create-task-dialog.component';
import { CreateListDialogComponent } from './components/dialogs/create-list-dialog/create-list-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NameInitialsPipe } from './pipes/name-initials.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NagivationComponent,
    DashboardComponent,
    RegisterComponent,
    PasswordResetComponent,
    ConfirmComponent,
    ForgotPasswordComponent,
    SetpasswordComponent,
    CreateTaskDialogComponent,
    CreateListDialogComponent,
    NameInitialsPipe,
  ],
  entryComponents: [
    ConfirmComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    NgbModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,


  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
