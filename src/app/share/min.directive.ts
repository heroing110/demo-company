import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from "@angular/forms";

export function minValidator(max: number): ValidatorFn {
  return (control: AbstractControl): any => {
    return max > control.value ? {'min': true} : null;
  };
}

@Directive({
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDirective, multi: true}]
})
export class MinDirective implements Validator, OnChanges {
  @Input()
  private min: number;

  private valFn = Validators.nullValidator;

  constructor() {
  }

  validate(c: AbstractControl): any {
    return this.valFn(c);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['min'];
    if (change) {
      this.valFn = minValidator(change.currentValue);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

}
