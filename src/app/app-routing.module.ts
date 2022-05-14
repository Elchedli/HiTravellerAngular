import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListUsersComponent } from './Front/list-users/list-users.component';
import { TestFrontComponent } from './test-front/test-front.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { MainProfileComponent } from './Front/main-profile/main-profile.component';
import { MainCompanyComponent } from './Front/main-company/main-company.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:"",redirectTo:"ManageProfile",pathMatch:"full"},
  {path: 'viewProfile',component : ReadProfileComponent},
  {path: 'ManageProfile',component : ProfileComponent},
  {path: 'home',component : HomeComponent},
  {path: 'profile/:id',component : MainProfileComponent},
  {path: 'company/:id',component : MainCompanyComponent},
  {path: 'test',component : TestComponent},
  {path: 'testFront',component : TestFrontComponent},
  {path: 'listSearch',component : ListUsersComponent},
  {path: 'editProfile/:id',component : EditProfileComponent},
  {path: 'editCompany/:id',component : EditCompanyComponent},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
