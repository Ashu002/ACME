import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ProductModule} from './products/product.module';

import {WelcomeComponent} from './home/welcome.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    ProductModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
    ])
  ],
  providers: [], // If we inject service here then it means router can use this service during the navigation process
  bootstrap: [AppComponent]
})
export class AppModule { }
