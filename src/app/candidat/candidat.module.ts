import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ListComponent } from '../list/list.component';
import { AddCandidatComponent } from '../add-candidat/add-candidat.component';
import { DetailComponent } from '../detail/detail.component';
import { CandidatFormComponent } from '../candidat-form/candidat-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomDatePipe } from '../shared/custom-date.pipe';
import { CustomPhonePipe } from '../shared/custom-phone.pipe';
import { EditComponent } from '../edit/edit.component';
import { ListCollabComponent } from '../list-collab/list-collab.component';
import { DetailCollabComponent } from '../detail-collab/detail-collab.component';
import { DetailCardComponent } from '../detail-card/detail-card.component';
import { AuthGuard } from '../auth-guard';

const candidatRoutes: Routes = [
  { path: 'edit/candidat/:id' , component : EditComponent, canActivate: [AuthGuard] },
  { path: '', component: ListComponent , canActivate: [AuthGuard] },
  { path: 'candidat/add', component: AddCandidatComponent , canActivate: [AuthGuard] },
  { path: 'candidat/:id', component: DetailComponent , canActivate: [AuthGuard] },
  { path: 'collaborateurs' , component: ListCollabComponent , canActivate: [AuthGuard] },
  { path: 'collaborateurs/:id' , component : DetailCollabComponent , canActivate: [AuthGuard] },
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
    ListCollabComponent,
    DetailCollabComponent,
    DetailCardComponent,
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
