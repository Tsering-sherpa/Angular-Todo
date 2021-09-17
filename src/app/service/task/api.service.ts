import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postTask(data: any) {
    return this.http.post<any>("http://127.0.0.1:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getTask() {
    return this.http.get<any>("http://127.0.0.1:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateTask(data: any, id: number) {
    return this.http.put<any>("http://127.0.0.1:3000/posts", +id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteTask(id: number) {
    return this.http.delete<any>("http://127.0.0.1:3000/posts" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
