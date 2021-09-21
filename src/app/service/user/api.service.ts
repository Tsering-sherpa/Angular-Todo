import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginComponent } from 'src/app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private login: LoginComponent) { }

  postUser(data: any) {
    return this.http.post<any>("https://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>("https://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>("https://localhost:3000/posts",+id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deletUeser(id: number){
    return this.http.delete<any>("https://localhost:3000/posts"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
