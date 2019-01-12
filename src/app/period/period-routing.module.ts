import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodPageComponent } from './components/period-page/period-page.component';

const routes: Routes = [
  { path: '', component: PeriodPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
