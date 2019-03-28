import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TestcssComponent } from './testcss/testcss.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue-componant/collegue-componant.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { CompteurVotesComponent } from './compteur-votes/compteur-votes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,
    TestcssComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    CompteurVotesComponent],
  imports: [BrowserModule,
  NgbModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
