import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userApi = "https://614d64ece3cf1f001712d0f6.mockapi.io/users"

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>(this.userApi, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>(this.userApi)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>(this.userApi,+id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deletUeser(id: number){
    return this.http.delete<any>(this.userApi+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
