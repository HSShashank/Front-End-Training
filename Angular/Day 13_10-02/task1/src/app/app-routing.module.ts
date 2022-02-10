import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'about', component:AboutComponent},{path:'', component:CarouselComponent},
  {path:'login', component:LoginComponent}, {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'signup', component:SignupComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
