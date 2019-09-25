import { Constants } from './../../../config/Constants';

import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './Menu';
import { NzIconService } from 'ng-zorro-antd';


@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.less']
})
export class NavLeftComponent implements OnInit {

  @Input() menuList : Array<Menu>;
  isCollapsed = true;
  username : string = "环球";
  userMessageCount : number = 10;


  constructor() { }

  ngOnInit() {
    this.menuList = Constants.MENU_LIST;
  }
 
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
};

