import {Resolve} from "@angular/router";
import {UserService} from "../share/user.service";
import {City} from "../../entity/city";
import {Injectable} from "@angular/core";
/**
 * Created by baihuibo on 2017/3/5.
 */

@Injectable()
export class CityResolve implements Resolve<City[]> {
  constructor(private userService: UserService) {

  }

  resolve(): Promise<City[]> {
    return this.userService.getAllCity();
  }

}
