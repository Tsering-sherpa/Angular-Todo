import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postTask(data: any) {
    return this.http.post<any>("https://614d64ece3cf1f001712d0f6.mockapi.io/tasks", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getTask() {
    return this.http.get<any>("https://614d64ece3cf1f001712d0f6.mockapi.io/tasks")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateTask(data: any, id: number) {
    return this.http.put<any>("https://614d64ece3cf1f001712d0f6.mockapi.io/tasks", +id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteTask(id: number) {
    return this.http.delete<any>("https://614d64ece3cf1f001712d0f6.mockapi.io/tasks" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}
