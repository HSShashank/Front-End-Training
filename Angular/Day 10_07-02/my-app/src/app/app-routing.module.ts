import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path:'', redirectTo:'/home', pathMatch:'full'},{path: 'home', component:HomeComponent},{path:'about', component:AboutComponent}
,{path:'contact',component:ContactComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
