import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    
  AlbumComponent,
    
  LoginComponent,
    
  SignupComponent,
    
  MovieComponent],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,FormsModule,ReactiveFormsModule,NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
