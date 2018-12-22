import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeriodsRoutingModule } from './periods-routing.module';

import { HautMoyenAgeComponent } from './pages/haut-moyen-age/haut-moyen-age.component';
import { PeriodComponent } from './pages/period/period.component';
import { PeriodCardComponent } from './components/period-card/period-card.component';

@NgModule({
  declarations: [HautMoyenAgeComponent, PeriodComponent, PeriodCardComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    SharedModule
  ],
  exports: [
    PeriodCardComponent
  ]
})
export class PeriodsModule { }
