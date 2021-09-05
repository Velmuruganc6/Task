import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { WeatherComponent } from './weather/weather.component';
import { DesignationsComponent } from './designations/designations.component';
import { ContactComponent } from './contact/contact.component';

// const routes: Routes = [{ path: '', component: HomeComponent }];
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    // children: [
    //   { path: 'weather', component: WeatherComponent },
    //   { path: 'destinations', component: DesignationsComponent },
    //   { path: 'contact', component: ContactComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
