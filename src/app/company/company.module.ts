import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard';
import { HomepageComponent } from '../homepage/homepage.component';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { CompanyEditComponent } from '../company-edit/company-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { CompanyFormComponent } from '../company-form/company-form.component';

const companyRoutes: Routes = [
  {
    path: 'edit/company/:id',
    component : CompanyEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path : 'company/add',
    component : AddCompanyComponent,
    canActivate : [AuthGuard],
  },
  {path:'', redirectTo:'', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyEditComponent,
    CompanyFormComponent,
     
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(companyRoutes),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class CompanyModule { }
