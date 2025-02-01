import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080/auth/login';
  constructor(private http: HttpClient) { }

  login(userData: any) {
    console.log("Dados enviados para o backend: ", userData);
    return this.http.post<{ token: string}>(this.url, userData).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }
}
