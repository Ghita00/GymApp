import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisualCardComponent } from './visual-card/visual-card.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AccountComponent } from './account/account.component';
import { NewCardComponent } from './new-card/new-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ModalExercisComponent } from './modal-exercis/modal-exercis.component';
import { HttpClientModule } from '@angular/common/http'; 
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualCardComponent,
    ProfileComponent,
    HomeComponent,
    Page404Component,
    NewUserComponent,
    AccountComponent,
    NewCardComponent,
    InfoCardComponent,
    LoginComponent,
    FooterComponent,
    ModalExercisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
