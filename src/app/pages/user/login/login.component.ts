import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ListadoService } from '../../../core/services/listado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticationService,private listadoService: ListadoService) { }
  user;
  pass;
  ngOnInit(): void {
  }

  
  login() {
    this.auth.login(this.user, this.pass);
  }
}
