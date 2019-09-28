import { Component, OnInit } from '@angular/core';
import {TravelItem} from '../entity/travel-item';
import {Constants} from '../../../../config/Constants';
import {TravelItemConfig} from '../../../../config/TravelItemConfig';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.less']
})
export class TravelListComponent implements OnInit {

  travelItemList : TravelItem[] = TravelItemConfig.TRAVEL_ITEM_LIST;

  selectedId: number;

  constructor() { }

  ngOnInit() {
  }

}
