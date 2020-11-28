import { RTCEquipmentsComponent } from './rtcequipments/rtcequipments.component';
import { RTCskillsComponent } from './rtcskills/rtcskills.component';
import { RTCAttributesComponent } from './rtcattributes/rtcattributes.component';
import { RTCClassComponent } from './rtcclass/rtcclass.component';
import { RTCBasicComponent } from './rtcbasic/rtcbasic.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RTCBasicComponent
  },
  {
    path: 'class',
    component: RTCClassComponent
  },
  {
    path: 'attributes',
    component: RTCAttributesComponent
  },
  {
    path: 'skills',
    component: RTCskillsComponent
  },
  {
    path: 'equipments',
    component: RTCEquipmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtcRouterModule { }
