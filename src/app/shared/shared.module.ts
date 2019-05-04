import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './UI/top-bar/top-bar.component';
import { FooterBarComponent } from './UI/footer-bar/footer-bar.component';
import { RouterModule } from '@angular/router';
import { PreviousPageComponent } from './UI/previous-page/previous-page.component';

@NgModule({
  declarations: [TopBarComponent, FooterBarComponent, PreviousPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopBarComponent,
    FooterBarComponent
  ]
})
export class SharedModule { }
