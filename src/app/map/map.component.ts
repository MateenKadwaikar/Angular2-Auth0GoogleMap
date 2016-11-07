import { Component, OnInit } from '@angular/core';

import { Auth } from '../service/auth0.service';

declare var google: any;

@Component({
  selector: 'app-my-google-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number = 14;
  private userName: string;
  private userImage: string = '../../assets/profile_default.jpg';
  public address: string;

  ngOnInit() {
    this.setLatandLng();
    this.getUserDetails();
  }

  constructor(private auth: Auth) {}

  setLatandLng() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(
      (data) => {
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
    }
  }

  getUserDetails() {
    if (localStorage.length > 0) {
      this.userName = JSON.parse(localStorage.getItem('profile')).name;
      this.userImage = JSON.parse(localStorage.getItem('profile')).picture;
    }
  }

  clickedMarker(lat, lng) {
    this.getAddress(lat, lng);
  }

  zoomChange(e) {
    console.log(e);
  }

  mapClicked(e) {
    console.log(e);
  }

  getAddress(lat, lng) {

    let location = new google.maps.LatLng(lat, lng);
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { location: location },
      (res) => {
        console.log(res);
        this.address = res[0].formatted_address;
      }
    );
  }

}
