import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-componant.component.html',
  styleUrls: ['./collegue-componant.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  likeActivated: boolean;
  dislikeActivated: boolean;
  constructor(private data: DataService) {
    this.dislikeActivated = true;
    this.likeActivated = true;
  }

  ngOnInit() {}
  check(a: Avis): void {
    if (Avis.AIMER === a && this.collegue.score < 200) {
      this.collegue.score = this.data.donnerUnAvis(this.collegue, a ).score;
      this.dislikeActivated = true;
      if (this.collegue.score === 200) {
        this.likeActivated = false;
      }
    } else if (Avis.DETESTER === a && this.collegue.score > -100) {
      this.collegue.score = this.data.donnerUnAvis(this.collegue, a).score;
      this.likeActivated = true;
      if (this.collegue.score === -100) {
        this.dislikeActivated = false;
      }
    }
  }
}
