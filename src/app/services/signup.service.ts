import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url = 'http://localhost:8080/auth/register';
  constructor(private http: HttpClient) { }

  cadastrar(userData: any) {
    userData.role = "ADMIN";
    console.log("Dados enviados para o backend: ", userData);
    return this.http.post(this.url, userData);
  }
}
