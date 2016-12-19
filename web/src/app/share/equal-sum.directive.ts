import {Directive, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Validators, AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, NgModel} from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function equalSumValidator(ctrls: any[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = control.value;
    let yes = false;
    if (Array.isArray(ctrls[0])) {
      yes = ctrls.map(sum).every(total => value == total);
    } else {
      yes = value == sum(ctrls);
    }
    return yes ? null : {'equalSum': {name: value}};
  }
}

function equalSumTriggerParent(parent: NgModel) {
  return (control: AbstractControl): {[key: string]: any} => {
    parent.control.updateValueAndValidity();
    return null;
  };
}

function sum(ctrls: any[]) {
  return ctrls.map((model: NgModel) => model.value).reduce((prev, current) => prev + current);
}

@Directive({
  selector: '[appEqualSum]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualSumDirective, multi: true}]
})
export class EqualSumDirective implements Validator, OnChanges {
  @Input() equalSum: NgModel[] | NgModel[][];
  @Input() trigger: NgModel;

  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const equalSum = changes['equalSum'];
    const trigger = changes['trigger'];
    if (equalSum) {
      this.valFn = equalSumValidator(equalSum.currentValue);
    } else if (trigger) {
      this.valFn = equalSumTriggerParent(trigger.currentValue);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}


