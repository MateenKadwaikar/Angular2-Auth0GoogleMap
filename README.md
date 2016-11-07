# Angular2Auth0

#Website

https://angular2auth0.firebaseapp.com


I tried my hand with Angular 2 , Auth0 and Google Maps. It's just a simple app , which login through Auth0 and then it displays Google Map with the current location.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##Libraries Used 

You neeed to provide a Google Maps API key to be able to see a Map. Get an API key https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key

You need to provide Client Id and Domain for Auth0 key to be able to see the Login Form from Auth0 . Get a Clien Id and Domanin key
https://auth0.com/docs/quickstart/webapp

Once you get all the key please add in app/auth/auth.config.ts

export const myConfig: AuthConfiguration = {
    clientID: '',
    domain: '',
    googleApi : '',
};


