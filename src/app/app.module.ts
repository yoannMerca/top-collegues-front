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
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    TestcssComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    CompteurVotesComponent,
    NouveauCollegueTemplateFormComponent],
  imports: [BrowserModule,
  NgbModule,
  HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
