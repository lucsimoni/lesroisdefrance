import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatePageComponent } from './components/date-page/date-page.component';

const routes: Routes = [
  { path: '', component: DatePageComponent},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DateRoutingModule { }
