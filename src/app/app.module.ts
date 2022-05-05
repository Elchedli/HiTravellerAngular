import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './Forum/post/post.component';
import { CommentComponent } from './Forum/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPostComponent } from './Forum/add-post/add-post.component';
import { UpdatePostComponent } from './Forum/update-post/update-post.component';
import { GetvoyageComponent } from './Trips/getvoyage/getvoyage.component';
import { CreatevoyageComponent } from './Trips/createvoyage/createvoyage.component';
import { UpdatevoyageComponent } from './Trips/updatevoyage/updatevoyage.component';
import { VoyageService } from '../app/services/voyage.service';
import { MenuComponent } from './menu/menu.component';
import { MenuFrontComponent } from './menu-front/menu-front.component';
import { CreatevoyageFrontComponent } from './TripsFront/createvoyage-front/createvoyage-front.component';
import { GetvoyageFrontComponent } from './TripsFront/getvoyage-front/getvoyage-front.component';
import { UpdatevoyageFrontComponent } from './TripsFront/updatevoyage-front/updatevoyage-front.component';
import { DetailstripsFrontComponent } from './TripsFront/detailstrips-front/detailstrips-front.component';
import { GetmyTripsComponent } from './TripsFront/getmy-trips/getmy-trips.component';
import { GetTripsCompanyComponent } from './TripsFront/get-trips-company/get-trips-company.component';
import { GetusertotripsComponent } from './TripsFront/getusertotrips/getusertotrips.component';
import { ListofemploComponent } from './TripsFront/listofemplo/listofemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    AddPostComponent,
    UpdatePostComponent,
    GetvoyageComponent,
    CreatevoyageComponent,
    UpdatevoyageComponent,
    MenuComponent,
    MenuFrontComponent,
    CreatevoyageFrontComponent,
    GetvoyageFrontComponent,
    UpdatevoyageFrontComponent,
    DetailstripsFrontComponent,
    GetmyTripsComponent,
    GetTripsCompanyComponent,
    GetusertotripsComponent,
    ListofemploComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VoyageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
