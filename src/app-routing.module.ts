import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsbackComponent } from './app/back/news/addnewsback/addnewsback.component';
import { ShownewsbackComponent } from './app/back/news/shownewsback/shownewsback.component';
import { ListpartnersbackComponent } from './app/back/partner/listpartnersback/listpartnersback.component';
import { AjoutpartnerbackComponent } from './app/back/partner/ajoutpartnerback/ajoutpartnerback.component';
import { AddadsbackComponent } from './app/back/publicity/addadsback/addadsback.component';
import { AddrecombackComponent } from './app/back/recommandation/addrecomback/addrecomback.component';
import { ShowrecombackComponent } from './app/back/recommandation/showrecomback/showrecomback.component';
import { AcceuilfrontComponent } from './app/front/acceuil/acceuilfront/acceuilfront.component';
import { ShowadsbackComponent } from './app/back/publicity/showadsback/showadsback.component';
import { RecomdetailsComponent } from './app/front/acceuil/recomdetails/recomdetails.component';
import { NewsdetailsComponent } from './app/front/acceuil/newsdetails/newsdetails.component';
import { AdsdetailsComponent } from './app/front/acceuil/adsdetails/adsdetails.component';
import { ModifyrecombackComponent } from './app/back/recommandation/modifyrecomback/modifyrecomback.component';
import { ChoixmessagerieComponent } from './app/front/messagerie/choixmessagerie/choixmessagerie.component';

const routes: Routes = [
  { path: '', redirectTo: 'back/news/show', pathMatch: 'full' },
  { path: 'back/news/add', component: AddnewsbackComponent },
  { path: 'back/news/show', component: ShownewsbackComponent },
  { path: 'back/partner/add', component: AjoutpartnerbackComponent },
  { path: 'back/partner/show', component: ListpartnersbackComponent },
  { path: 'back/ad/show', component: ShowadsbackComponent },
  { path: 'back/ad/add', component: AddadsbackComponent },
  { path: 'back/recom/add', component: AddrecombackComponent },
  { path: 'back/recom/modify/:id', component: ModifyrecombackComponent },
  { path: 'back/recom/show', component: ShowrecombackComponent },
  { path: 'front/acceuil', component: AcceuilfrontComponent },
  { path: 'front/acceuil/recom/:id', component: RecomdetailsComponent },
  { path: 'front/acceuil/news/:id', component: NewsdetailsComponent },
  { path: 'front/acceuil/ads/:id', component: AdsdetailsComponent },
  { path: 'front/messagerie/choice', component: ChoixmessagerieComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
