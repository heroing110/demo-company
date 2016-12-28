import { Component, OnInit } from '@angular/core';
import {UserService} from "../share/user.service";
import {UserInfo} from "../share/user-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private user:UserInfo;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
  }

  logout(){
    this.userService.logout().then(()=>{
        this.router.navigate(['/login']);
    });
  }

}
