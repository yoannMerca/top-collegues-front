import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Router } from '@angular/router';

class CollegueForm {
  matricule: string;
  pseudo: string;
  image: string;
}


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})

export class NouveauCollegueTemplateFormComponent implements OnInit {
  newCollegue: CollegueForm = new CollegueForm();
  constructor(private data: DataService, private router: Router) {}
  err = false;
  message: string;
  type: string;
  ngOnInit() {}
  submit() {
    this.data
      .insertNewCollegue(
        this.newCollegue.matricule,
        this.newCollegue.pseudo,
        this.newCollegue.image
      )
      .subscribe(
        () => {
          this.type = 'success',
          this.message = 'le collegue à bien été créé',
          this.err = true;
          setTimeout(() => {
            this.router.navigate(['/accueil']);
          }, 1000);
        },
        error => {
          this.type = 'warning';
          this.message = error.error;
          this.err = true;
        }
      );
  }
  close(){
    this.err = false;
  }
}
