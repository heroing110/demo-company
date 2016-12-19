import {Component} from '@angular/core';
import {UserService} from "../share/user.service";
import {RouterStateSnapshot, Router} from "@angular/router";

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
    if (this.username && this.password) {
      this.userService.login(this.username, this.password) .then(() => {
        if (this.userService.isLogin()) {
          this.router.navigate(['/report']);
        } else {
          alert('登录失败');
        }
      });
    } else {
      alert('请输入用户名和密码');
    }
  }
}
