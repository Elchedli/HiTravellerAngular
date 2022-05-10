import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Menu/menu-back/menu.component';
import { CreateUserComponent } from './registration/create-user/create-user.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './AuthenUser/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAdminComponent } from './registration/create-admin/create-admin.component';
import { ForgetPasswordComponent } from './AuthenUser/forget-password/forget-password.component';
import { VerifyEmailComponent } from './registration/verify-email/verify-email.component';
import { ResetPasswordComponent } from './AuthenUser/reset-password/reset-password.component';
import { MenuFrontComponent } from './Menu/menu-front/menu-front.component';
import { CreateEmployeeComponent } from './registration/create-employee/create-employee.component';
import { CreateInvitationComponent } from './Invitation/create-invitation/create-invitation.component';
import { DetailsInvitationComponent } from './Invitation/details-invitation/details-invitation.component';
import { ListComponent } from './Invitation/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
    CreateAdminComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    MenuFrontComponent,
    CreateEmployeeComponent,
    CreateInvitationComponent,
    DetailsInvitationComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
