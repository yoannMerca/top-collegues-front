import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-componant.component.html',
  styleUrls: ['./collegue-componant.component.css']
})
export class CollegueComponent implements OnInit {
 @Input() collegue: Collegue;
  constructor() {
   }

  ngOnInit() {
  }
  avis(a: string): void {
    (a === 'Avis.AIMER') ? this.collegue.score += 10 : this.collegue.score -= 10;
  }
}
