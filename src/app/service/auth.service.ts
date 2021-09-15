import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  users = []
  private _loginUrl = "https://mocki.io/v1/f388b28d-d0d2-4303-9395-7d17c251e053"

  constructor(private http: HttpClient) { }

  loginUser() {
    this.http.get(this._loginUrl)
      .subscribe(Response => {
        console.log(Response)
        this.user = Response;
        this.users = this.user.list;
      });
  }
}
