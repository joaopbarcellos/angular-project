import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = 'http://localhost:8080/api/UserService/users';
  constructor(private http: HttpClient) { }

  list() {
    const token = localStorage.getItem('bearerToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<ResponseType[]>(this.url, { headers });
  }
}
