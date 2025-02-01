import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { FormComponent } from '../../components/form/form.component';
import { RouterModule, Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  imports: [TitleComponent, FormComponent],
  providers: [SignupService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  formFields = [
    { id: 'name', label: 'Nome', placeholder: "Digite seu nome", value: undefined, type: 'text' },
    { id: 'login', label: 'Login', placeholder: "Digite seu login", value: undefined, type: 'text' },
    { id: 'password', label: 'Senha', placeholder: "Digite sua senha", value: undefined, type: 'password' }
  ]
  
  constructor(private signupService: SignupService, private router: Router) { }

  onFormSubmit(formData: any) {
    this.signupService.cadastrar(formData).subscribe({
      next: data => this.router.navigate(['/login']),
      error: error => console.error('Erro ao cadastrar usuário', error)
    });
  }
}
