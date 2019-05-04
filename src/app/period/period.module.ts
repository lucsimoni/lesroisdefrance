import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodPageComponent } from './components/period-page/period-page.component';
import { CharacterCardComponent } from './components/period-page/components/character-card/character-card.component';
import { PeriodHomeComponent } from './components/period-home/period-home.component';
import { PeriodCardComponent } from './components/period-home/components/period-card/period-card.component';

@NgModule({
  declarations: [PeriodPageComponent, CharacterCardComponent, PeriodHomeComponent, PeriodCardComponent],
  imports: [
    CommonModule,
    PeriodRoutingModule
  ]
})
export class PeriodModule { }
