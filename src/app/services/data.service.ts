import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { collegues } from '../collegues';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeCollegues: Collegue[] = collegues;
  private listeVotes = new Subject<Vote>();

  constructor() {}

  lister(): Observable<Collegue[]> {
    return of(this.listeCollegues);
  }

  donnerUnAvis(collegue: Collegue, a: Avis): Observable<Collegue> {
    if (Avis.AIMER === a && collegue.score < 200) {
      collegue.score += 10;
    } else if (Avis.DETESTER === a && collegue.score > -100) {
      collegue.score -= 10;
    }
    this.listeVotes.next({collegue, avis: a});
    return of(collegue);
  }

  listerVotes(): Observable<Vote> {
    return this.listeVotes.asObservable();
  }
}
