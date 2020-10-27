import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RTCBasicComponent } from './rtcbasic/rtcbasic.component';
import { RTCClassComponent } from './rtcclass/rtcclass.component';
import { RTCAttributesComponent } from './rtcattributes/rtcattributes.component';
import { RTCskillsComponent } from './rtcskills/rtcskills.component';
import { RTCEquipmentsComponent } from './rtcequipments/rtcequipments.component';

@NgModule({
  declarations: [RTCBasicComponent, RTCClassComponent, RTCAttributesComponent, RTCskillsComponent, RTCEquipmentsComponent],
  imports: [
    CommonModule
  ]
})
export class RTCreatorModule { }
