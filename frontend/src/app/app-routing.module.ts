import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewCardComponent } from './new-card/new-card.component';
import { AccountComponent } from './account/account.component';
import { InfoCardComponent } from './info-card/info-card.component';

const routes: Routes = [
  {path: 'userManagment', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: 'newCard', component: NewCardComponent},
  {path: 'account', component: AccountComponent},
  {path: 'detail', component: InfoCardComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
