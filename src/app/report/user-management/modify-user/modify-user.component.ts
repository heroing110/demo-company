// Created by baihuibo on 2017/2/16.
import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {UserInfo} from "../../../../entity/user-info";
import {RestoreService} from "../../restore.service";
import {City} from "../../../../entity/city";
import {UserService} from "../../../share/user.service";

@Component({
  selector: 'app-modify-user',
  templateUrl: 'modify-user.component.html',
  providers: [RestoreService]
})
export class ModifyUserComponent implements OnInit {

  @Input() title: string;
  @Input() create: boolean;
  @Output() saveModify = new EventEmitter();
  user: UserInfo = new UserInfo();
  modalId = 'modify_' + Date.now();
  citys: City[];

  constructor(private restoreService: RestoreService<UserInfo>,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllCity().then(citys => this.citys = citys);
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
    this.saveModify.next(this.user);
  }
}
