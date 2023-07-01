import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      
      this.userService.login(username, password).subscribe(
        (response) => {
          this.response = response;
          this.successMessage = response.msg;
          // Mensaje de respuesta en caso de acceder correctamente
          console.log('Ha iniciado sesión correctamente', response);
          this.router.navigate(['/']);
        },
        (error) => {
          this.response = error;
          console.log('aaaaaa ' + this.response);
          this.errorMessage = error.error.msg;
          console.log('bbbb ' + this.errorMessage);
          // Mostramos el error por consola
          console.error('Error de login', error);
        }
      );
    }
  }
}
