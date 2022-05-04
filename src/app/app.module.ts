import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './back/menu/menu.component';
import { AcceuilService } from './services/acceuil.service';
import { AddnewsbackComponent } from './back/news/addnewsback/addnewsback.component';
import { ShownewsbackComponent } from './back/news/shownewsback/shownewsback.component';
import { AjoutpartnerbackComponent } from './back/partner/ajoutpartnerback/ajoutpartnerback.component';
import { ListpartnersbackComponent } from './back/partner/listpartnersback/listpartnersback.component';
import { AddadsbackComponent } from './back/publicity/addadsback/addadsback.component';
import { AddrecombackComponent } from './back/recommandation/addrecomback/addrecomback.component';
import { ShowrecombackComponent } from './back/recommandation/showrecomback/showrecomback.component';
import { AcceuilfrontComponent } from './front/acceuil/acceuilfront/acceuilfront.component';
import { ShowadsbackComponent } from './back/publicity/showadsback/showadsback.component';
import { MenuFrontComponent } from './front/menu-front/menu-front.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecomdetailsComponent } from './front/acceuil/recomdetails/recomdetails.component';
import { NewsdetailsComponent } from './front/acceuil/newsdetails/newsdetails.component';
import { AdsdetailsComponent } from './front/acceuil/adsdetails/adsdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuFrontComponent,
    AddnewsbackComponent,
    ShownewsbackComponent,
    AjoutpartnerbackComponent,
    ListpartnersbackComponent,
    AddadsbackComponent,
    ShowadsbackComponent,
    AddrecombackComponent,
    ShowrecombackComponent,
    AcceuilfrontComponent,
    RecomdetailsComponent,
    NewsdetailsComponent,
    AdsdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [AcceuilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
