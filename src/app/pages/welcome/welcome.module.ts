import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import { NavRightComponent } from '../nav-right/nav-right.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent, HeaderComponent, FooterComponent, ContentComponent, NavRightComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
