import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [

  {path: 'signin' , component:SigninComponent},
  {path: 'signup' , component:SignupComponent},
  { path: 'dashboard' , 
    component:SideNavComponent ,
    children: [
      {path: 'aboutus',component:AboutusComponent}
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }