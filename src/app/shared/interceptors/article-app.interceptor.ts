import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from 'app/user/services/user-store.service';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {
  constructor(private userStoreService: UserStoreService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token almacenado en el UserStoreService
    const token = this.userStoreService.getToken();

    if (token) {
       // Si hay un token, agregamos el encabezado de autorización al request con el token
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Continuamos con el siguiente manipulador de solicitudes
    return next.handle(request);
  }
}
