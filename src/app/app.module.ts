
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {RestaurantService} from './restaurant/restaurant.service';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UpdateRestaurantComponent } from './restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './restaurant/add-restaurant.component';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/index';
import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService } from './_services/index';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    RestaurantService,
    AlertService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
