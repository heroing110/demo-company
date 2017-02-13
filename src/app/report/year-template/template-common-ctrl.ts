// Created by baihuibo on 2017/2/13.
import {NgModel} from "@angular/forms";
import {Year} from "../../../entity/year";

export class TemplateCommonCtrl {
  yearObj: Year;

  getCount(...models: NgModel[]) {
    return models.reduce((pre: number, model: NgModel) => {
      return pre + parseFloat(model.value || 0);
    }, 0);
  }

  cellChangeZerofill(model: NgModel, all: NgModel[]) {
    if (model.value == 0) {
      all.forEach(model => {
        if (!model.value) {
          this.yearObj[model.name] = 0;
        }
      })
    }
  }
}
