import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { collegues } from '../collegues';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeCollegues: Collegue[] = collegues;
  private listeVotes: Vote[] = [];

  constructor() {}
  lister(): Collegue[] {
    return this.listeCollegues;
  }

  donnerUnAvis(collegue: Collegue, a: Avis): Collegue {
    if (Avis.AIMER === a && collegue.score < 200) {
      collegue.score += 10;
    } else if (Avis.DETESTER === a && collegue.score > -100) {
      collegue.score -= 10;
    }
    return collegue;
  }
  listerVotes(): Vote[] {
    const votes: Vote[] = [
      { collegue : this.listeCollegues[0], avis : Avis.AIMER},
      { collegue: this.listeCollegues[2], avis: Avis.AIMER },
      { collegue: this.listeCollegues[1], avis: Avis.DETESTER }
  ];
    return votes;
  }
}
