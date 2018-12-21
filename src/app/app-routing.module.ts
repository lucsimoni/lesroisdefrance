import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'a-propos', component: AboutComponent},
  { path: 'page-introuvable', component: NotFoundComponent},
  { path: 'periode', loadChildren: './periods/periods.module#PeriodsModule'},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
