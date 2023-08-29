import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'userManagment', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'newUser', component: NewUserComponent, canActivate: [AuthGuard]},
  {path: 'newCard', component: NewCardComponent, canActivate: [AuthGuard]},
  {path: 'detail', component: InfoCardComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
