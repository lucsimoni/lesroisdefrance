import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './UI/top-bar/top-bar.component';
import { FooterBarComponent } from './UI/footer-bar/footer-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent, FooterBarComponent],
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
