import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  settings_user_avatar:string = "//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  settings_user_name = "admin"
  
  constructor() { }

  ngOnInit() {
  }

}
