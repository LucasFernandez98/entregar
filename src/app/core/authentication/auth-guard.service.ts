import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if(this.auth.isLogged) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
