import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStoreService } from 'app/user/services/user-store.service';
import { UserService } from 'app/user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  response: any;
  successMessage: string = '';
  errorMessage: string = '';
  showMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private userStoreService: UserStoreService) { }

  ngOnInit() {
    // Inicialización del formulario de inicio de sesión
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Se obtienen los valores del formulario
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      
      this.showMessage = false;

      // Llamada al servicio de autenticación para iniciar sesión
      this.userService.login(username, password).subscribe(
        (response) => {
          // Si la respuesta de inicio de sesión es exitosa...
          // Guardamos la respuesta
          this.response = response;
          // El mensaje a mostrar será de éxito
          this.successMessage = response.msg + ' - Redirecting to Article List...';
          this.errorMessage = '';
          this.showMessage = true;
          // Almacenamos el token en el servicio UserStoreService
          this.userStoreService.setToken(response.token);
          // Mensaje por consola
          console.log('Ha iniciado sesión correctamente', response);
          // Retardamos la redirección por 2 segundos para poder mostrar el mensaje
          setTimeout(() => {
            // Redirigimos al usuario a la página de Article List
            this.router.navigate(['/article/list']);
          }, 2000);
        },
        (error) => {
          // Si hay error en el inicio de sesión...
          // El mensaje a mostrar será de error
          this.response = error;
          this.errorMessage = error.error.msg;
          this.successMessage = ''
          this.showMessage = true;
          // Mostramos el error por consola
          console.error('Error de login', error);
        }
      );
    }
  }
}
