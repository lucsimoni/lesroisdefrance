import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './UI/top-bar/top-bar.component';
import { FooterBarComponent } from './UI/footer-bar/footer-bar.component';

@NgModule({
  declarations: [TopBarComponent, FooterBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopBarComponent,
    FooterBarComponent
  ]
})
export class SharedModule { }
