import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ListCandidatComponent} from '../list/list-candidat.component';
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
import { AccountComponent } from '../account/account.component';
import { SearchListComponent } from '../search-list/search-list.component';

const candidatRoutes: Routes = [
  { path: 'edit/candidat/:id' , component : EditComponent, canActivate: [AuthGuard] },
  { path: 'candidat', component: ListCandidatComponent , canActivate: [AuthGuard] },
  { path: 'candidat/add', component: AddCandidatComponent , canActivate: [AuthGuard] },
  { path: 'candidat/:id', component: DetailComponent , canActivate: [AuthGuard] },
  { path: 'collaborateurs' , component: ListCollabComponent , canActivate: [AuthGuard] },
  { path: 'collaborateurs/:id' , component : DetailCollabComponent , canActivate: [AuthGuard] },
  { path : 'account/' , component : AccountComponent , canActivate : [AuthGuard] },
  { path: '', redirectTo: 'candidat' , pathMatch: 'full' ,},
];

@NgModule({
  declarations: [
    ListCandidatComponent,
    AddCandidatComponent,
    DetailComponent,
    CandidatFormComponent,
    CustomDatePipe,
    CustomPhonePipe,
    EditComponent,
    ListCollabComponent,
    DetailCollabComponent,
    DetailCardComponent,
    SearchListComponent,
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
