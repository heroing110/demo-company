// Created by baihuibo on 2017/2/16.

import {PipeTransform, Pipe} from "@angular/core";
import {UserService} from "../share/user.service";

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {
  private cityMap: {[cityId: string]: string};

  constructor(private userService: UserService) {
    userService.getAllCity().then(cityMap => this.cityMap = cityMap);
  }

  transform(cityId: any): any {
    return this.cityMap[cityId] || cityId;
  }
}
