import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeriodsRoutingModule } from './periods-routing.module';

import { HautMoyenAgeComponent } from './pages/haut-moyen-age/haut-moyen-age.component';
import { PeriodComponent } from './pages/period/period.component';

@NgModule({
  declarations: [HautMoyenAgeComponent, PeriodComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    SharedModule
  ]
})
export class PeriodsModule { }
