import { Component, OnInit, Input } from '@angular/core';

import { Auth } from '../service/auth0.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.html',
  styleUrls: ['./app.navbar.css'],
})
export class NavBarComponent implements OnInit {

  private  title: string = 'Auth0 - Angular 2';

  @Input() userName: string;
  @Input() userImage: string;

  constructor(private auth: Auth) {}

  ngOnInit() { }

}
