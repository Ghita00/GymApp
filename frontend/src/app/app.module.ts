import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VisualCardComponent } from './components/visual-card/visual-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalExercisComponent } from './components/modal-exercis/modal-exercis.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualCardComponent,
    ProfileComponent,
    HomeComponent,
    Page404Component,
    NewUserComponent,
    NewCardComponent,
    InfoCardComponent,
    LoginComponent,
    FooterComponent,
    ModalExercisComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
