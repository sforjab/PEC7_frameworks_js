import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/user/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  response: any;
  successMessage: string = '';
  errorMessage: string = '';
  showMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''] // No aplicamos el validador 'required', dado que podemos no introducir contraseña
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;

      this.showMessage = false;
      
      // Llamada al servicio de autenticación para registrar usuario
      this.userService.register(username, password).subscribe(
        (response) => {
          // Si la respuesta de registro es exitosa...
          // Guardamos la respuesta
          this.response = response;
          // El mensaje a mostrar será de éxito
          this.successMessage = response.msg + ' - Redirecting to login...';
          this.errorMessage = '';
          this.showMessage = true;
          // Mensaje por consola
          console.log('Se ha registrado con éxito', response);
          // Retardamos la redirección por 2 segundos para poder mostrar el mensaje
          setTimeout(() => {
            // Redirigimos al usuario a la página de login
            this.router.navigate(['/login']);
          }, 2000);
        },
        (error) => {
          // Si hay error en el inicio de sesión...
          // El mensaje a mostrar será de error
          this.response = error;
          this.errorMessage = error.error.msg;
          this.successMessage = '';
          this.showMessage = true;
          // Mostramos el error por consola
          console.error('Error de registro', error);
        }
      );
    }
  }
}
