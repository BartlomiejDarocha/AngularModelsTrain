import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';
import { LevelBarDirective } from './level-bar.directive';

@NgModule({
  declarations: [CollapseDirective, LevelBarDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    CollapseDirective,
    LevelBarDirective
  ]
})
export class DirectivesModule { }
