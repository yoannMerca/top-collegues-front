import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPseudoMatriculeValidator]'
})
export class PseudoMatriculeValidatorDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
   return null;
  }

}
