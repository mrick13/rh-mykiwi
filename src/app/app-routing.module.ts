import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  
  { path : '', redirectTo: 'login' , pathMatch: 'full'},
  { path : 'login' , component: LoginComponent},
  { path : 'registration', component: RegistrationComponent},
  { path : 'homepage' , component: HomepageComponent},
  { path : '**' , component: LoaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
