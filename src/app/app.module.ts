import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader.service';
import { CandidatModule } from './candidat/candidat.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    CandidatModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
