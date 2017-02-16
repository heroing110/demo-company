// Created by baihuibo on 2017/2/16.
import {Component, Output, EventEmitter, Input} from '@angular/core';
import {UserInfo} from "../../../../entity/user-info";

@Component({
  selector: 'app-modify-password',
  templateUrl: 'modify-password.component.html'
})
export class ModifyPasswordComponent {

  @Input() hideOldPwd: boolean;
  @Output() saveModify = new EventEmitter();
  user: UserInfo;
  modalId = 'modify_' + Date.now();
  pwd: any = {};

  constructor() {
  }

  open(user?: UserInfo) {
    this.pwd = {oldPwd: '', newPwd: '', confirmPwd: ''};
    this.user = user;
    $('#' + this.modalId).modal('show');
  }

  close() {
    this.pwd = {};
    this.user = null;
    $('#' + this.modalId).modal('hide');
  }

  save() {
    this.saveModify.next(this.pwd);
  }

  valid() {
    if (this.hideOldPwd) {
      return this.pwd.newPwd === this.pwd.confirmPwd;
    }
    return this.pwd.oldPwd && this.pwd.newPwd && this.pwd.newPwd === this.pwd.confirmPwd;
  }
}
