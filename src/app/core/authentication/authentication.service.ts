import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { LoginComponent } from 'src/app/pages/user/login/login.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token;
  isLogged = false;

  pi_url= 'http://icaro.cdgweb.com.ar/public/';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('icaro_token');
    if (token) {
      this.token = token;
      this.isLogged = true;
    }
   }

   login(user , pass) {
    const data = {
      user_username: user,
      user_password: pass,
    };

    this.http.post(this.pi_url + 'login' , {data}).subscribe(
      res => {
      let response: any = res;
      this.token = response.token;
      this.isLogged = true;
      localStorage.setItem('icaro_token' , this.token);
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
    });
  }
  logout() {
    this.token = null;
    this.isLogged = false;
    localStorage.removeItem('icaro_token');
    this.router.navigate(['login']);
  }
}
