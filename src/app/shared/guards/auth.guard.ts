import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from 'app/user/services/user-store.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(): boolean {
    // Comprobamos si el usuario está autenticado verificando si hay un token almacenado en el UserStoreService
    const isAuthenticated = this.userStore.getToken() !== '';
    // Si el usuario está autenticado, permitimos la activación de la ruta
    if (isAuthenticated) {
      return true;
    } else {
      // Si el usuario no está autenticado, redirigimos al usuario a la página de inicio de sesión (login) y bloqueamos la activación de la ruta
      this.router.navigate(['login']);
      return false;
    }
  }
}