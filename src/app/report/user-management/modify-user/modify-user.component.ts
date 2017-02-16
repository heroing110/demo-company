// Created by baihuibo on 2017/2/16.
import {Component, Output, EventEmitter} from '@angular/core';
import {UserInfo} from "../../../../entity/user-info";
import {RestoreService} from "../../restore.service";

@Component({
  selector: 'app-modify-user',
  templateUrl: 'modify-user.component.html',
  providers: [RestoreService]
})
export class ModifyUserComponent {

  @Output() saveModify = new EventEmitter();
  user: UserInfo = new UserInfo();
  modalId = 'modify_' + Date.now();

  constructor(private restoreService: RestoreService<UserInfo>) {
  }

  open(user: UserInfo) {
    this.restoreService.setItem(user);
    this.user = this.restoreService.getItem();
    $('#' + this.modalId).modal('show');
  }

  close() {
    $('#' + this.modalId).modal('hide');
  }

  save() {
    this.saveModify.next(this.restoreService.getItem());
  }

  valid() {

  }
}
