import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
      
      this.userService.login(username, password).subscribe(
        (response) => {
          // Mensaje de respuesta en caso de que el registro sea correcto
          console.log('Se ha registrado con éxito', response);
          // Dejamos esto aquí para redireccionar a otra página, mostrar mensaje, etc.
        },
        (error) => {
          // Mostramos el error por consola
          console.error('Error de registro', error);
          // Dejamos esto aquí por si queremos mostrar mensaje de error, reiniciar formulario, etc.
        }
      );
    }
  }
}
