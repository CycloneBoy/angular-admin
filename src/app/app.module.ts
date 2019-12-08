import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './pages/login/login/login.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { HeaderComponent } from './components/header/header.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { TableComponent } from './pages/table/table.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


import { HeroesModule }  from './heroes/heroes.module'
import { CrisisCenterModule }      from './crisis-center/crisis-center.module';
import {WelcomeModule} from './pages/welcome/welcome.module';

import { NgxEchartsModule } from 'ngx-echarts';
import {httpInterceptorProviders} from './http-interceptors';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavLeftComponent,
    HeaderComponent,
    CrisisListComponent,
    TableComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    WelcomeModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
