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
  user: UserInfo;
  pwd = {oldPwd: '', newPwd: '', confirmPwd: ''};

  navList = [
    {name: '添加季报表', router: 'season/add', permission: ["1", "2"]},
    {name: '季报表列表', router: 'season/list', permission: ["1", "2", "0"]},
    {name: '添加年报表', router: 'year/add', permission: ["1", "2"]},
    {name: '年报表列表', router: 'year/list', permission: ["1", "2", "0"]},
    {name: '用户管理', router: 'users', permission: ["1", "0"]}
  ];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getUserInfo();

    // 根据权限设置菜单
    this.navList = this.navList.filter(nav => nav.permission.includes(this.user.permission))
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
