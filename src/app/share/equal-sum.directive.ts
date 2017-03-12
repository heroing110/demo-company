import {Directive, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Validators, AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, NgModel} from "@angular/forms";

/** A hero's name can't match the given regular expression */
export function equalSumValidator(ctrls: any[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = control.value;
    if (Array.isArray(ctrls[0])) {
      ctrls.map((models: NgModel[]) => {
        const total = sum(models);
        setModelsValid(models, total === value);
      });
    } else {
      setModelsValid(ctrls, sum(ctrls) === value);
    }
    return {};
  }
}

function setModelsValid(models: NgModel[], valid) {
  models.forEach(model => {
    model.control['customValid'] = !valid;
    model.control.updateValueAndValidity();
    delete model.control['customValid'];
  });
}

function equalSumTriggerParent(parent: NgModel[]) {
  return (control: AbstractControl): {[key: string]: any} => {
    parent.forEach(function (item) {
      item.control.updateValueAndValidity();
    });
    return {};
  };
}

function sum(ctrls: any[]) {
  return ctrls.map((model: NgModel) => parseFloat(model.value))
    .reduce((prev, current) => prev + current);
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

    let equalSumFn, triggerFn;
    if (equalSum) {
      equalSumFn = equalSumValidator(equalSum.currentValue);
    }
    if (trigger) {
      triggerFn = equalSumTriggerParent(trigger.currentValue);
    }

    if (equalSumFn || triggerFn) {
      this.valFn = function (control: AbstractControl) {
        const sumRes = equalSumFn && equalSumFn(control) || null;
        const triggerRes = triggerFn && triggerFn(control) || null;
        return sumRes || triggerRes;
      };
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    if (control['customValid'] === true) {
      return {equalSum: true};
    } else if (control['customValid'] === false) {
      return {};
    }
    return this.valFn(control);
  }
}


