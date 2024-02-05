import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ListComponent } from '../list/list.component';
import { AddCandidatComponent } from '../add-candidat/add-candidat.component';
import { DetailComponent } from '../detail/detail.component';
import { HeaderComponent } from '../header/header.component';
import { CandidatFormComponent } from '../candidat-form/candidat-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomDatePipe } from '../custom-date.pipe';

const candidatRoutes: Routes = [
  { path: '', component: ListComponent},
  { path: 'candidat/add', component: AddCandidatComponent},
  { path: 'candidat/:id', component: DetailComponent},
]

@NgModule({
  declarations: [
    ListComponent,
    AddCandidatComponent,
    DetailComponent,
    CandidatFormComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(candidatRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CandidatModule { }
