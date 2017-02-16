// Created by baihuibo on 2017/2/16.
import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../../entity/user-info";
import {UserManagementService} from "../user-management.service";
import {ModifyPasswordComponent} from "./modify-password/modify-password.component";
import {ModifyUserComponent} from "./modify-user/modify-user.component";

@Component({
  templateUrl: 'user-management.component.html'
})
export class UserManagementComponent implements OnInit {
  usernamecn = '';
  permission = '';
  userList: UserInfo[];

  constructor(private userManagementService: UserManagementService) {
  }

  ngOnInit() {
    this.query();
  }

  query() {
    this.userManagementService.queryAll(this.usernamecn, this.permission)
      .then(userList => this.userList = userList);
  }


  // 删除用户
  deleteUser(user: UserInfo) {
    if (confirm('确定删除此用户?')) {
      this.userManagementService.delete(user.id)
        .then(res => res.removed ? this.query() : alert(res.message));
    }
  }

  // 修改密码
  saveModifyPassword(pwd, modifyPasswordComponent: ModifyPasswordComponent) {
    this.userManagementService.changePwd(modifyPasswordComponent.user.id, pwd)
      .then(res => {
        if (res.updated) {
          this.query();
          modifyPasswordComponent.close();
        } else {
          alert(res.message);
        }
      });
  }

  saveModifyUser(user, modifyUserComponent: ModifyUserComponent) {
    this.userManagementService.update(user)
      .then(res => {
        if (res.updated) {
          this.query();
          modifyUserComponent.close();
        } else {
          alert(res.message);
        }
      });
  }
}
