import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../src/app/Forum/post/post.component';
import { AddPostComponent } from '../src/app/Forum/add-post/add-post.component';
import { UpdatePostComponent } from './app/Forum/update-post/update-post.component';
import { MenuComponent } from './app/menu/menu.component';
import { GetvoyageComponent } from '../src/app/Trips/getvoyage/getvoyage.component';
import { CreatevoyageComponent } from '../src/app/Trips/createvoyage/createvoyage.component';
import { UpdatevoyageComponent } from '../src/app/Trips/updatevoyage/updatevoyage.component';
import { MenuFrontComponent } from './app/menu-front/menu-front.component';
import { GetvoyageFrontComponent } from './app/TripsFront/getvoyage-front/getvoyage-front.component';
import { DetailstripsFrontComponent } from './app/TripsFront/detailstrips-front/detailstrips-front.component';
import { CreatevoyageFrontComponent } from './app/TripsFront/createvoyage-front/createvoyage-front.component';
import { GetmyTripsComponent } from './app/TripsFront/getmy-trips/getmy-trips.component';
import { ListofemploComponent } from './app/TripsFront/listofemplo/listofemplo.component';


 const ROUTES : Routes = [
  {path: 'trips', component:GetvoyageFrontComponent},
  {path: 'voyage', component:GetvoyageComponent},
  {path: 'add', component:CreatevoyageComponent},
  {path: 'voyage/updatevoyage/:id', component: UpdatevoyageComponent },
  {path: 'post',component : PostComponent},
  {path: 'addPost',component : AddPostComponent},
  {path: 'detailsTrip/:id',component : DetailstripsFrontComponent},
  {path: 'updatePost',component : UpdatePostComponent},
  {path: 'getcompanytrips',component : GetmyTripsComponent},
  {path: 'addFront',component : CreatevoyageFrontComponent},
  {path: 'listEmployee/:id',component : ListofemploComponent},
  {path: '',component : GetvoyageFrontComponent},

 /* {path:'voyage',component:GetvoyageComponent,children:[
    {path:"/add",component:CreatevoyageComponent},{path:"/update/:id",component:UpdatevoyageComponent}]
   
  }*/
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
