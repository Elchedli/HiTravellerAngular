import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Menu/menu-back/menu.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './AuthenUser/login/login.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { CreateUserComponent } from './registration/create-user/create-user.component';
import { CreateAdminComponent } from './registration/create-admin/create-admin.component';
import { CreateEmployeeComponent } from './registration/create-employee/create-employee.component';

import { VerifyEmailComponent } from './registration/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './AuthenUser/forget-password/forget-password.component';
import { ResetPasswordComponent } from './AuthenUser/reset-password/reset-password.component';
import { MenuFrontComponent } from './Menu/menu-front/menu-front.component';
import { ListComponent } from './Invitation/list/list.component';
import { DetailsInvitationComponent } from './Invitation/details-invitation/details-invitation.component';
import { CreateInvitationComponent } from './Invitation/create-invitation/create-invitation.component';

const ROUTES: Routes = [
  { path: '', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: CreateUserComponent },
  { path: 'signUpAdmin', component: CreateAdminComponent },
  { path: 'signUpEmployee', component: CreateEmployeeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'verify', component: VerifyEmailComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  {
    path: 'forgetPassword/reset_password',
    component: ResetPasswordComponent,
  },
  { path: 'menuFront', component: MenuFrontComponent },
  {
    path: 'invitations',
    component: ListComponent,
  },
  {
    path: 'detailsInvitation/:id',
    component: DetailsInvitationComponent,
  },
  {
    path: 'createInvitation',
    component: CreateInvitationComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
