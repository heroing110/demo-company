// Created by baihuibo on 2017/2/16.

import {PipeTransform, Pipe} from "@angular/core";
import {PERMISSION} from "../../../entity/user-info";

@Pipe({
  name: 'permission'
})
export class UserPermissionPipe implements PipeTransform {

  transform(value: any): any {
    return PERMISSION[value] || value;
  }
}
