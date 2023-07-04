import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStoreService } from 'app/user/services/user-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private userStoreService: UserStoreService) {}

  isAuthenticated(): boolean {
    // Verificamos si el usuario está autenticado
    return !!this.userStoreService.getToken();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToArticleList() {
    this.router.navigate(['/article/list']);
  }

  navigateToCreateArticle() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/article/create']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
