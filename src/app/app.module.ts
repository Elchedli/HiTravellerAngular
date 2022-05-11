import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DeleteCompanyComponent } from './delete-company/delete-company.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { MainProfileComponent } from './Front/main-profile/main-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MainCompanyComponent } from './Front/main-company/main-company.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadProfileComponent,
    ProfileComponent,
    HomeComponent,
    CreateProfileComponent,
    CreateCompanyComponent,
    PagenotfoundComponent,
    DeleteCompanyComponent,
    DeleteProfileComponent,
    MainProfileComponent,
    EditProfileComponent,
    MenuComponent,
    MainCompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
