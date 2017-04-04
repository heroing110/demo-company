import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from "@angular/forms";

export function maxValidator(max: number): ValidatorFn {
  return (control: AbstractControl): any => {
    return max < control.value ? {'max': true} : null;
  };
}

@Directive({
  selector: '[max]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator, OnChanges {
  @Input()
  private max: number;

  private valFn = Validators.nullValidator;

  constructor() {
  }

  validate(c: AbstractControl): any {
    return this.valFn(c);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['max'];
    if (change) {
      this.valFn = maxValidator(change.currentValue);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }
}
