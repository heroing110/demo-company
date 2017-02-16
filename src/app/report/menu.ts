// Created by baihuibo on 2017/2/16.

export class MenuItem {
  name: string;
  router: string;
  permission: string[]
}

export const MenuList: MenuItem[] = [
  {name: '欢迎', router: 'welcome', permission: ["0", "1", "2"]},
  {name: '添加季报表', router: 'season/add', permission: ["2"]},
  {name: '季报表列表', router: 'season/list', permission: ["0", "1", "2"]},
  {name: '添加年报表', router: 'year/add', permission: ["2"]},
  {name: '年报表列表', router: 'year/list', permission: ["0", "1", "2"]},
  {name: '用户管理', router: 'user-management', permission: ["0", "1"]}
];
