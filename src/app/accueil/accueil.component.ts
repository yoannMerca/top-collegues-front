import { Component, OnInit } from '@angular/core';
import { collegues } from '../collegues';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listCollegues = collegues;
  constructor() { }

  ngOnInit() {
  }

}
