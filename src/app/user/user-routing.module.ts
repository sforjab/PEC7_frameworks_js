import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Definición de las rutas del módulo UserModule
const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: 'register', component: RegisterComponent }, // Ruta para el componente de registro de usuario
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importación de las rutas definidas en el módulo
  exports: [RouterModule] // Exportación del módulo de enrutamiento
})
export class UserRoutingModule { }
