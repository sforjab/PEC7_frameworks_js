import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(): boolean {
    const token = this.userStore.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}