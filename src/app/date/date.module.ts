import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatSliderModule} from '@angular/material/slider';

import { DateRoutingModule } from './date-routing.module';
import { DatePageComponent } from './components/date-page/date-page.component';

@NgModule({
  declarations: [DatePageComponent],
  imports: [
    CommonModule,
    DateRoutingModule,
    // MatSliderModule
  ]
})
export class DateModule { }
