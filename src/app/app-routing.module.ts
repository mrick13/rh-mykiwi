import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  
  { path : '', redirectTo: 'login' , pathMatch: 'full'},
  { path : 'login' , component: LoginComponent},
  { path : 'registration', component: RegistrationComponent},
  { path : 'account/' , component : AccountComponent},
  { path : '**' , component: LoaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
