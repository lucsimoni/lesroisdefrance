import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRoutingModule } from './date-routing.module';
import { DatePageComponent } from './components/date-page/date-page.component';
import { Ng5SliderModule } from 'ng5-slider';
import { CharacterCardComponent } from './components/date-page/components/character-card/character-card.component';

@NgModule({
  declarations: [DatePageComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    DateRoutingModule,
    Ng5SliderModule
  ]
})
export class DateModule { }
