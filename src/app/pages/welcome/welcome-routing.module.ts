import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {ContentComponent} from '../content/content.component';
import {NavRightComponent} from '../nav-right/nav-right.component';
import {FooterComponent} from '../footer/footer.component';
import {TravelItemHomeComponent} from '../common/travel-item-home/travel-item-home.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent ,children:[
      { path: 'header', component: FooterComponent  },
      { path: 'navright', component: NavRightComponent },
      { path: 'content', component: ContentComponent },
      { path: 'home', component: TravelItemHomeComponent },
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
