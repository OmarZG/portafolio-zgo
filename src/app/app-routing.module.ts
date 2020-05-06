import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const appRoutes: Routes = [
   { path: 'home', component: PortafolioComponent },
   { path: 'about', component: AboutComponent },
   { path: 'item', component: ItemComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
