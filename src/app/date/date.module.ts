import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRoutingModule } from './date-routing.module';
import { DatePageComponent } from './components/date-page/date-page.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [DatePageComponent],
  imports: [
    CommonModule,
    DateRoutingModule,
    Ng5SliderModule
  ]
})
export class DateModule { }
