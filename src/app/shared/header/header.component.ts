import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
}
