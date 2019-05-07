import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomecomponentComponent } from './components/welcomecomponent/welcomecomponent.component';
import { CreatereimbComponent } from './components/createreimb/createreimb.component';
import { ViewreimbComponent } from './components/viewreimb/viewreimb.component';
import { ResolvereimbComponent } from './components/resolvereimb/resolvereimb.component';
import { WelcomescreenComponent } from './components/welcomescreen/welcomescreen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcomecomponent',
    component: WelcomecomponentComponent,
    children: [
      {
        path: 'createreimb',
        component: CreatereimbComponent
      },
      {
        path: 'viewreimb',
        component: ViewreimbComponent
      },
      {
        path: 'resolvereimb',
        component: ResolvereimbComponent
      },
      {
        path: 'welcomescreen',
        component: WelcomescreenComponent
      },
      {
        path: '',
        component: WelcomescreenComponent
      }

    ]
  },
  {
    path: '',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
