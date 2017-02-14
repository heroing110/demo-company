import {Component, OnInit} from '@angular/core';
import {UserService} from "../share/user.service";
import {UserInfo} from "../../entity/user-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private user: UserInfo;
  private pwd = {oldPwd: '', newPwd: '', confirmPwd: ''};

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
  }

  logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  initPwd() {
    this.pwd = {oldPwd: '', newPwd: '', confirmPwd: ''};
  }

  pwdValid() {
    return !(this.pwd.oldPwd && this.pwd.newPwd && this.pwd.newPwd === this.pwd.confirmPwd);
  }

  savePwd() {// 保存修改的密码
    this.userService.changePwd(this.pwd).then(data => {
      if (data.updated) {
        alert('修改成功，请重新登录');
        this.logout();
      } else if (data.message) {
        alert(data.message);
      } else {
        alert('修改失败');
      }
    });
  }

}
