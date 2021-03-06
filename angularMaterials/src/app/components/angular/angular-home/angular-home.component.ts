import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-home',
  templateUrl: './angular-home.component.html',
  styleUrls: ['./angular-home.component.less']
})
export class AngularHomeComponent implements OnInit {
  public subMenu = [
    {url: 'inOutPut', name: 'Input i Output'},
    {url: 'routing', name: 'Routing'},
    {url: 'lazyRouting', name: 'LazyRouting'},
    {url: 'lazyRoutingComp2', name: 'lazyRoutingChildren'},
    {url: 'routingTrainAngular', name: 'routing train angular'},
    {url: 'rxjs', name: 'rxjs obs, sub, event'},
    {url: 'modules', name: 'Modułowość'},
    {url: 'services', name: 'Servisy'},
    {url: 'validation', name: 'Validacja'},
    {url: 'entryComponent', name: 'Componenty Wejscia'},
    {url: 'intercereptors', name: 'Intercereptory'},
    {url: 'pipes', name: 'Rurki'},
    {url: 'directives', name: 'Derektywy'},
    {url: 'promise', name: 'Obietnice'},
    {url: 'viewChild', name: 'viewChild, Js'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
