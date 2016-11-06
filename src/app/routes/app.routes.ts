import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from '../map/map.component';

import { NavBarComponent } from '../navbar/app.navbar';

const routes: Routes = [
  { path: '', component: NavBarComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
