import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import { NavRightComponent } from '../nav-right/nav-right.component';
import { TravelItemComponent } from '../common/travel-item/travel-item.component';
import { TravelListComponent } from '../common/travel-list/travel-list.component';
import {CommonModule} from '@angular/common';
import { TravelItemHomeComponent } from '../common/travel-item-home/travel-item-home.component';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule],
  declarations: [WelcomeComponent, HeaderComponent, FooterComponent, ContentComponent, NavRightComponent, TravelItemComponent, TravelListComponent, TravelItemHomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
