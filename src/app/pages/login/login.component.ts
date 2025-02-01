import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { FormComponent } from '../../components/form/form.component';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [TitleComponent, FormComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formFields = [
    { id: 'login', label: 'Login', placeholder: "Digite seu login", type: 'text' },
    { id: 'password', label: 'Senha', placeholder: "Digite sua senha", type: 'password' }
  ] 

  constructor(private loginService: LoginService, private router: Router) {}

  onClick(formData: any) {
    this.loginService.login(formData).subscribe({
      next: data => this.router.navigate(['/list']),
      error: error => console.error('Erro ao logar usuário', error)
    });
  }
}
