import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeriodsRoutingModule } from './periods-routing.module';

import { HautMoyenAgeComponent } from './pages/haut-moyen-age/haut-moyen-age.component';

@NgModule({
  declarations: [HautMoyenAgeComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    SharedModule
  ]
})
export class PeriodsModule { }
