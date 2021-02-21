import { RTCEquipmentsComponent } from './rtcequipments/rtcequipments.component';
import { RTCskillsComponent } from './rtcskills/rtcskills.component';
import { RTCAttributesComponent } from './rtcattributes/rtcattributes.component';
import { RTCClassComponent } from './rtcclass/rtcclass.component';
import { RTCBasicComponent } from './rtcbasic/rtcbasic.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'basic',
    component: RTCBasicComponent,
    data: { name: 'basic'}
  },
  {
    path: 'class',
    component: RTCClassComponent,
    data: { name: 'class'}
  },
  {
    path: 'attributes',
    component: RTCAttributesComponent,
    data: { name: 'attributes'}
  },
  {
    path: 'skills',
    component: RTCskillsComponent,
    data: { name: 'skills'}
  },
  {
    path: 'equipments',
    component: RTCEquipmentsComponent,
    data: { name: 'equipments' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtcRouterModule { }
