import {Component, OnInit} from '@angular/core';
import {UserService} from "../share/user.service";
import {UserInfo} from "../../entity/user-info";
import {Router} from "@angular/router";
import {MenuItem, MenuList} from "./menu";
import {ModifyPasswordComponent} from "./user-management/modify-password/modify-password.component";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  user: UserInfo;
  menuList: MenuItem[];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.userService.getUserInfo();

    // 根据权限调整菜单
    this.menuList = MenuList.filter(menu => menu.permission.includes(this.user.permission))
  }

  logout() {
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

  savePwd(pwd, modifyPassword: ModifyPasswordComponent) {// 保存修改的密码
    this.userService.changePwd(pwd).then(data => {
      if (data.updated) {
        alert('修改成功，请重新登录');
        modifyPassword.close();
        this.logout();
      } else if (data.message) {
        alert(data.message);
      } else {
        alert('修改失败');
      }
    });
  }
}
