import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AUTH_PROVIDERS  } from 'angular2-jwt';

import { Auth } from './service/auth0.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent } from './map/map.component';

import { NavBarComponent } from './navbar/app.navbar';

import { routing } from './routes/app.routes';

import { myConfig } from '../app/config/auth.config';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: myConfig.googleApi
    }),
    routing
  ],
  providers: [AUTH_PROVIDERS, Auth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
