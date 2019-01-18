import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodPageComponent } from './components/period-page/period-page.component';
import { PeriodGuard } from '../core/guards/period.guard';

const routes: Routes = [
  { path: ':id', component: PeriodPageComponent, canActivate: [PeriodGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
