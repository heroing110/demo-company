// Created by baihuibo on 2017/2/13.
import {NgModel} from "@angular/forms";
import {Year} from "../../entity/year";
import {Season} from "../../entity/season";

export class TemplateCommonCtrl {
  yearObj: Year;
  seasonObj: Season;

  getSeasonPropCount(...props: string[]) {
    return props.reduce((prev, prop) => {
      return prev + (+this.seasonObj[prop] || 0);
    }, 0)
  }

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
