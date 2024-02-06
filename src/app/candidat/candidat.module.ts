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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { CustomPhonePipe } from '../shared/custom-phone.pipe';
import { EditComponent } from '../edit/edit.component';

const candidatRoutes: Routes = [
  { path: 'edit/candidat/:id' , component : EditComponent},
  { path: '', component: ListComponent },
  { path: 'candidat/add', component: AddCandidatComponent },
  { path: 'candidat/:id', component: DetailComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    AddCandidatComponent,
    DetailComponent,
    CandidatFormComponent,
    CustomDatePipe,
    CustomPhonePipe,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(candidatRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class CandidatModule {}
