import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/config/Constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  menuList = Constants.MENU_LIST;


  constructor() { }

  ngOnInit() {
  }

}
