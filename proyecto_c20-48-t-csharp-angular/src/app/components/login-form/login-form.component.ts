import { Component} from '@angular/core';
import { LoginService } from '../login/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private loginService: LoginService) { }

  // onLogin(): Verifica que los campos no estén vacíos y llama al servicio para enviar los datos. Maneja la respuesta y el error del servicio.

  onLogin(): void{
      if (!this.username || !this.password) {
        return; // Validación adicional si es necesario
      }
      this.loginService.login(this.username, this.password).subscribe(
        response => {
          console.log('Login exitoso', response);
          // Maneja la respuesta del login, como redirigir al usuario o almacenar el token
        },
        error => {
          console.error('Error en el login', error);
          // Maneja el error del login, muestra un mensaje al usuario si es necesario
        }
      );
    }
  }
