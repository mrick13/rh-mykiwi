import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader.service';
import { CandidatModule } from './candidat/candidat.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    CandidatModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
