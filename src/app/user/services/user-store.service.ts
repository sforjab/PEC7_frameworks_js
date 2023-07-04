import { Injectable } from '@angular/core';

// Se proporciona el servicio en el nivel raíz de la aplicación
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  // Clave para el token en LocalStorage
  private tokenKey = 'auth_token';

  constructor() { }

  setToken(token: string): void {
    // Se almacena el token en LocalStorage
    localStorage.setItem(this.tokenKey, token); 
  }

  getToken(): string {
    // Obtenemos el token desde LocalStorage
    return localStorage.getItem(this.tokenKey) || '';
  }
}