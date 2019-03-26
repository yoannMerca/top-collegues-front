import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  //@Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  avis(s: string) {
    this.change.emit(s);
  }
  constructor() {}

  ngOnInit() {}
}
