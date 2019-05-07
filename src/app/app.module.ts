import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreatereimbComponent } from './components/createreimb/createreimb.component';
import { ViewreimbComponent } from './components/viewreimb/viewreimb.component';
import { ResolvereimbComponent } from './components/resolvereimb/resolvereimb.component';

import { WelcomecomponentComponent } from './components/welcomecomponent/welcomecomponent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomescreenComponent } from './components/welcomescreen/welcomescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatereimbComponent,
    ViewreimbComponent,
    ResolvereimbComponent,
    WelcomecomponentComponent,
    WelcomescreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
