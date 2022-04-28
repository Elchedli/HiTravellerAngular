import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../src/app/Forum/post/post.component';
import { AddPostComponent } from '../src/app/Forum/add-post/add-post.component';
import { UpdatePostComponent } from './app/Forum/update-post/update-post.component';
import { AddnewsbackComponent } from './app/back/news/addnewsback/addnewsback.component';
import { ShownewsbackComponent } from './app/back/news/shownewsback/shownewsback.component';
import { ListpartnersbackComponent } from './app/back/partner/listpartnersback/listpartnersback.component';
import { AjoutpartnerbackComponent } from './app/back/partner/ajoutpartnerback/ajoutpartnerback.component';
import { AddadsbackComponent } from './app/back/publicity/addadsback/addadsback.component';
import { AddrecombackComponent } from './app/back/recommandation/addrecomback/addrecomback.component';
import { ShowrecombackComponent } from './app/back/recommandation/showrecomback/showrecomback.component';
import { AcceuilfrontComponent } from './app/front/acceuilfront/acceuilfront.component';
import { ShowadsbackComponent } from './app/back/publicity/showadsback/showadsback.component';

 const routes : Routes = [
  {path:"",redirectTo:"back/news/show",pathMatch:"full"},
  {path: 'post',component : PostComponent},
  {path: 'addPost',component : AddPostComponent},
  {path: 'updatePost',component : UpdatePostComponent},
  {path: 'back/news/add',component : AddnewsbackComponent},
  {path: 'back/news/show',component : ShownewsbackComponent},
  {path: 'back/partner/add',component : AjoutpartnerbackComponent},
  {path: 'back/partner/show',component : ListpartnersbackComponent},
  {path: 'back/ad/show',component : ShowadsbackComponent},
  {path: 'back/ad/add',component : AddadsbackComponent},
  {path: 'back/recom/add',component : AddrecombackComponent},
  {path: 'back/recom/show',component : ShowrecombackComponent},
  {path:"front/acceuil",component: AcceuilfrontComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
