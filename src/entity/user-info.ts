/**
 * Created by Administrator on 2016/12/13 0013.
 */
export class UserInfo {
  id: string = '';
  cityid: string = '';
  username: string = '';
  password: string = '';
  permission: string = ''; // 0省管理员，1市管理员，2企业用户
  usernamecn: string = '';
  companyName: string = '';// 单位名称
}


export enum PERMISSION{
  "省管理员" = 0,
  "市管理员" = 1,
  "企业用户" = 2
}
