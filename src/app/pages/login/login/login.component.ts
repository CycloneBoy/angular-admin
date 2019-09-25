import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Constants } from 'src/config/Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  size = 'large'
  isCollapsed = false;

  menuList = Constants.MENU_LIST;
  

  constructor() {}

  ngOnInit(): void {
    
  }
}
