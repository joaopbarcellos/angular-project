import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserListType } from '../types/response-type';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url = 'http://localhost:8080/api/UserService/users';
  constructor(private http: HttpClient) { }

  list() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<UserListType[]>(this.url, { headers });
  }
}
