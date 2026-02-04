import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email && password) {
      this.isLoggedIn = true;
      this.router.navigate(['/products']);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
