import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'a-propos', component: AboutComponent},
  { path: 'page-introuvable', component: NotFoundComponent},
  //On ne déclare pas le module périod, il est déclaré dans le loadchildren
  { path: 'periode', loadChildren: './period/period.module#PeriodModule'},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
