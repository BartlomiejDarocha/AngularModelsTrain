import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';
import { LevelBarDirective } from './level-bar.directive';
import { AvatarDirective } from './avatar.directive';
import { LoadPhotoLabelDirective } from './load-photo-label.directive';

@NgModule({
  declarations: [CollapseDirective, LevelBarDirective, LoadPhotoLabelDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    CollapseDirective,
    LevelBarDirective
  ]
})
export class DirectivesModule { }

@NgModule({
  declarations: [AvatarDirective],
  imports: [CommonModule],
  exports: [AvatarDirective]
})
export class AvatarDirectiveModule { }

