import { Component, OnInit } from '@angular/core';
import { Menu } from './Menu';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.less']
})
export class NavLeftComponent implements OnInit {

  menuList : Array<Menu>;

  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        title: '员工管理',
        key: '/user',
        icon: "user",
        children:[]
    },
    {
        title: '车辆地图',
        key: '/bikeMap',
        icon: "fire",
        children:[]
    },
    {
      title: '图表',
      key: '/charts',
      icon: "instagram",
      children: [
          {
              title: '柱形图',
              key: '/charts/bar',
              icon: "bar-chart",
              children:[]
          },
          {
              title: '饼图',
              key: '/charts/pie',
              icon: "pie-chart",
              children:[]
          },
          {
              title: '折线图',
              key: '/charts/line',
              icon: "line-chart",
              children:[]
          }
      ]
  },
    ]
  }

  // 菜单渲染
  renderMenu(data: string[]) {

  }
    
};

