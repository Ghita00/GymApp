import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { AccountComponent } from './components/account/account.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'userManagment', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: 'newCard', component: NewCardComponent},
  {path: 'account', component: AccountComponent},
  {path: 'detail', component: InfoCardComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
