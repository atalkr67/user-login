import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavRoutingModule } from "./nav-routing/nav-routing.module";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ExistingComponent } from './existing/existing.component';

import { MatSnackBar, MatSnackBarModule  } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ExistingComponent
  ],
  imports: [
    BrowserModule,
    NavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
