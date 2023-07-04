import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Se proporciona el servicio en el nivel raíz de la aplicación
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL de la API
  private apiUrl = 'http://localhost:3000/api/user';

  // Constructor de la clase UserService que recibe una instancia de HttpClient
  constructor(private http: HttpClient) {}

  // Función para realizar la solicitud de inicio de sesión
  login(username: string, password: string): Observable<any> {
    // URL completa para la ruta de inicio de sesión
    const url = `${this.apiUrl}/login`;
    // Cuerpo de la solicitud, que contiene los datos de inicio de sesión
    const body = { username, password };
    // Se realiza una solicitud HTTP POST al servidor
    return this.http.post(url, body);
  }

  // Función para realizar la solicitud de reigstro de usuario
  register(username: string, password?: string): Observable<any> {
    // URL completa para la ruta de registro
    const url = `${this.apiUrl}/register`;
    // Cuerpo de la solicitud, que contiene los datos de registro
    const body = { username, password };
    // Se realiza una solicitud HTTP POST al servidor
    return this.http.post(url, body);
  }
}
