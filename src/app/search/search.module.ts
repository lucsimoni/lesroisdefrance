import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { CharacterCardComponent } from './components/search-page/components/character-card/character-card.component';

@NgModule({
  declarations: [SearchPageComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
