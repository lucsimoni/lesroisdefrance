import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodPageComponent } from './components/period-page/period-page.component';
import { CharacterCardComponent } from './components/period-page/components/character-card/character-card.component';

@NgModule({
  declarations: [PeriodPageComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    PeriodRoutingModule
  ]
})
export class PeriodModule { }
