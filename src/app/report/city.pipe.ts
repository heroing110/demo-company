// Created by baihuibo on 2017/2/16.

import {PipeTransform, Pipe} from "@angular/core";
import {UserService} from "../share/user.service";
import {City} from "../../entity/city";

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {
  private citys: City[] = [];

  constructor(private userService: UserService) {
    userService.getAllCity().then(citys => this.citys = citys);
  }

  transform(cityId: any): any {
    const city = this.citys.find(city => city.id == cityId);
    if (city) {
      return city.name;
    }
    return '[cityPipe : city not found]';
  }
}
