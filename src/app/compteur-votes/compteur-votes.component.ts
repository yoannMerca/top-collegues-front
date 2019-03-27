import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-compteur-votes',
  templateUrl: './compteur-votes.component.html',
  styleUrls: ['./compteur-votes.component.css']
})
export class CompteurVotesComponent implements OnInit {
 compteur: number;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.compteur = 0;
    this.data.listerVotes().subscribe(() => this.compteur++,
      () => alert('observable mal passe'),
    );
  }

}
