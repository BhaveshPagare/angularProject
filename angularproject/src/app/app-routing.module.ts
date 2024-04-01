import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ServicesComponent} from './services/services.component'
import {ContactComponent} from './contact/contact.component'
import {PortfolioComponent} from './portfolio/portfolio.component'
import {AboutComponent} from './about/about.component'


const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
  },
  {
    path:'Services',
    component:ServicesComponent,
  },
  {
    path:'Portfolio',
    component:PortfolioComponent,
  },
  {
    path:'About',
    component:AboutComponent,
  },
  {
    path:'Contact',
    component:ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
