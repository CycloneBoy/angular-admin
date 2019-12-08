import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {ContentComponent} from '../content/content.component';
import {NavRightComponent} from '../nav-right/nav-right.component';
import {FooterComponent} from '../footer/footer.component';
import {TravelItemHomeComponent} from '../common/travel-item-home/travel-item-home.component';
import {CallinfoComponent} from '../callinfo/callinfo.component';
import {NotFoundComponent} from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent ,children:[
      { path: 'header', component: FooterComponent  },
      { path: 'navright', component: NavRightComponent },
      { path: 'content', component: ContentComponent },
      { path: 'home', component: TravelItemHomeComponent },
      { path: 'callinfo',component:CallinfoComponent},
      { path: '',redirectTo: '/content',pathMatch: 'full'},
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
