import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  listApi = "https://614d64ece3cf1f001712d0f6.mockapi.io/lists"

  constructor(private http: HttpClient) { }

  postList(data: any) {
    return this.http.post<any>(this.listApi, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getList() {
    return this.http.get<any>(this.listApi)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateList(data: any, id: number) {
    return this.http.put<any>(this.listApi, +id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteList(id: number) {
    return this.http.delete<any>(this.listApi + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}

