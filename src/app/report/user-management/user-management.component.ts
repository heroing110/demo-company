// Created by baihuibo on 2017/2/16.
import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../../entity/user-info";
import {UserManagementService} from "../user-management.service";
import {ModifyPasswordComponent} from "./modify-password/modify-password.component";
import {ModifyUserComponent} from "./modify-user/modify-user.component";
import {UserService} from "../../share/user.service";
import {City} from "../../../entity/city";

@Component({
  templateUrl: 'user-management.component.html'
})
export class UserManagementComponent implements OnInit {
  usernamecn = '';
  permission = '';
  userList: UserInfo[];
  currentUser: UserInfo;

  constructor(private userManagementService: UserManagementService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getUserInfo();
    this.query();
  }

  query() {
    this.userManagementService.queryAll(this.usernamecn, this.permission)
      .then(userList => this.userList = userList);
  }

  saveNewUser(user: UserInfo, newUserComponent: ModifyUserComponent) {
    this.userManagementService.insert(user).then(res => {
      if (res.inserted) {
        newUserComponent.close();
        alert(res.message || '新建用户成功!');
        this.query();
      } else {
        alert(res.message);
      }
    });
  }


  // 删除用户
  deleteUser(user: UserInfo) {
    if (confirm('确定删除此用户?')) {
      this.userManagementService.delete(user.id)
        .then(res => res.removed ? this.query() : alert(res.message));
    }
  }

  // 保存修改的密码
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

  // 保存修改的用户
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
