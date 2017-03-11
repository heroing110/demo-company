import {Component, OnInit} from '@angular/core';
import {UserService} from "../../share/user.service";
import {UserInfo} from "../../../entity/user-info";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  userInfo: UserInfo;

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
  }
}
