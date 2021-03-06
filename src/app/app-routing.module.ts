import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:'', redirectTo:'login', pathMatch: 'full'
  },

  {
    component: LoginComponent,
    path : 'login'
   },
   {
     component:HomeComponent,
     path:'home'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
