import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component'
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { TableComponent } from './pages/table/table.component'
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {WelcomeRoutingModule} from './pages/welcome/welcome-routing.module';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'login', component: LoginComponent},
  { path: 'navleft', component: NavLeftComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'travel', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},

  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes', component: HeroListComponent },

  // { path: 'crisis-center', component: LoginComponent },
  { path: 'card', component:  TableComponent},
  // { path: 'hero/:id',      component: NavLeftComponent },
  // { path: 'heroes',component: HeaderComponent,data: { title: 'Heroes List' }},
  { path: '',redirectTo: '/we',pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
