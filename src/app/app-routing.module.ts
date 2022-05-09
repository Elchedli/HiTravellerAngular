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

const ROUTES: Routes = [
  { path: '', component: UserListComponent },
  { path: 'menuFront', component: MenuFrontComponent },
  { path: 'users', component: UserListComponent },
  { path: 'signUp', component: CreateUserComponent },
  { path: 'signUpAdmin', component: CreateAdminComponent },
  { path: 'signUpEmployee', component: CreateEmployeeComponent },

  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify', component: VerifyEmailComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  {
    path: 'forgetPassword/reset_password',
    component: ResetPasswordComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
