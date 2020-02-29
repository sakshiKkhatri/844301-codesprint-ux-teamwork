import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { VieworderComponent } from './components/vieworder/vieworder.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'placeorder', component:PlaceorderComponent},
  {path: 'vieworder', component:VieworderComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
