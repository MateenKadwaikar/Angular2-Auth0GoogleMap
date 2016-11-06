import { Component, OnInit } from '@angular/core';

import { Auth } from '../service/auth0.service';

@Component({
  selector: 'app-my-google-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number = 16;
  private userName: string;
  private userImage: string = '../../assets/profile_default.jpg';

  ngOnInit() {
    this.setLatandLng();
    this.getUserDetails();
  }

  constructor(private auth: Auth) { }

  setLatandLng() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
    }
  }

  getUserDetails() {
    if (localStorage.length > 0) {
      this.userName = JSON.parse(localStorage.getItem('profile')).name;
      this.userImage = JSON.parse(localStorage.getItem('profile'))['picture'] ;
    }
  }

}
