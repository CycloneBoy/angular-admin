import {Component, Input, OnInit} from '@angular/core';
import {TravelItem} from '../entity/travel-item';

@Component({
  selector: 'app-travel-item',
  templateUrl: './travel-item.component.html',
  styleUrls: ['./travel-item.component.less']
})
export class TravelItemComponent implements OnInit {

  @Input() travelItem: TravelItem;


  constructor() {

  }

  ngOnInit() {



  }

}
