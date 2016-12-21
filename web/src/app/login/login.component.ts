import {Component} from '@angular/core';
import {UserService} from "../share/user.service";
import {RouterStateSnapshot, Router} from "@angular/router";
import {md5} from '../util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';

    constructor(private userService: UserService, private router: Router) {
    }

    login() {
        this.userService.login(this.username, this.password) .then(() => {
            if (this.userService.isLogin()) {
                this.router.navigate(['/report']);
            } else {
                alert('登录失败');
            }
        });
    }
}
