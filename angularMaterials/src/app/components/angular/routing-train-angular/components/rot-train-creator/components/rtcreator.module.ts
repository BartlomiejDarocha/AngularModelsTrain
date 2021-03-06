import { MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { RtcRouterModule } from './rtc-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RTCBasicComponent } from './rtcbasic/rtcbasic.component';
import { RTCClassComponent } from './rtcclass/rtcclass.component';
import { RTCAttributesComponent } from './rtcattributes/rtcattributes.component';
import { RTCskillsComponent } from './rtcskills/rtcskills.component';
import { RTCEquipmentsComponent } from './rtcequipments/rtcequipments.component';
import { AvatarDirectiveModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    RtcRouterModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    AvatarDirectiveModule
  ],
  declarations: [
    RTCBasicComponent,
    RTCClassComponent,
    RTCAttributesComponent,
    RTCskillsComponent,
    RTCEquipmentsComponent
  ],
  exports: [
    RTCBasicComponent,
    RTCClassComponent,
    RTCAttributesComponent,
    RTCskillsComponent,
    RTCEquipmentsComponent
  ]
})
export class RTCreatorModule { }
