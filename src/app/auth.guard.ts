import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './service/user/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: ApiService) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true
    } 
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
