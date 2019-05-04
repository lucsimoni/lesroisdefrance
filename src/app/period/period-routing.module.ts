import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodPageComponent } from './components/period-page/period-page.component';
import { PeriodGuard } from '../core/guards/period.guard';
import { PeriodHomeComponent } from './components/period-home/period-home.component';

const routes: Routes = [
  { path: '', component: PeriodHomeComponent},
  { path: ':id', component: PeriodPageComponent, canActivate: [PeriodGuard]},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
