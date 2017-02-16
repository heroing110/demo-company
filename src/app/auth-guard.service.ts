/**
 * Created by baihuibo on 2016/12/25 0025.
 */
import {Injectable}     from '@angular/core';
import {CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot}    from '@angular/router';
import {UserService} from "./share/user.service";
import {MenuList} from "./report/menu";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate().then(isLogin => {
      if (isLogin) { // 如果用户已经登陆
        const user = this.userService.getUserInfo();
        const menuItem = MenuList.find(nav => state.url.includes(nav.router));
        if (menuItem && !menuItem.permission.includes(user.permission)) {
          alert('此用户无权限访问此页面');
          this.router.navigate(['/report/welcome']);
          return false;
        }
      }
      return isLogin;
    });
  }

  canActivate() {
    return this.userService.isLogin().then(isLogin => {
      if (!isLogin) {// 如果用户未登陆，跳转到登陆页
        this.router.navigate(['/login']);
      }
      return isLogin;
    });
  }
}
