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
    { id: 'name', label: 'Nome', placeholder: "Digite seu nome", type: 'text' },
    { id: 'login', label: 'Login', placeholder: "Digite seu login",  type: 'text' },
    { id: 'password', label: 'Senha', placeholder: "Digite sua senha", type: 'password' }
  ]
  
  constructor(private signupService: SignupService, private router: Router) { }

  onFormSubmit(formData: any) {
    this.signupService.cadastrar(formData).subscribe({
      next: data => this.router.navigate(['/login']),
      error: (data) => {
        if (data.status == 200) this.router.navigate(['/login']);
      }
    });
  }
}
