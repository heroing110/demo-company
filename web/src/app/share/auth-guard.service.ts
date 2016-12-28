/**
 * Created by Administrator on 2016/12/25 0025.
 */
import {Injectable}     from '@angular/core';
import {CanActivate, Router, CanActivateChild}    from '@angular/router';
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router: Router) {

    }

    canActivateChild() {
        return this.canActivate();
    }

    canActivate() {
        return this.userService.isLogin().then(res => {
            if (!res) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
}