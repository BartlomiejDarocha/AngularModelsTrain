import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-vievchild',
  templateUrl: './vievchild.component.html',
  styleUrls: ['./vievchild.component.less']
})
export class VievchildComponent implements OnInit, AfterViewInit {
  @ViewChild('blicker') public blicker: ElementRef;
  public blickerOn = false;
  public blickerInterval: any;
  public buttonId = '';
  public scollHeight = '';
  public boxesArray = [
    { id: 'box1', name: 'box1' },
    { id: 'box2', name: 'box2' },
    { id: 'box3', name: 'box3' }
  ];
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }
  public blikingHandler(): void {
    if (!this.blickerOn) {
      this.blickerInterval = setInterval(() => {
        if (this.blicker.nativeElement.style.background === 'red') {
          this.blicker.nativeElement.style.background = 'blue';
          this.blicker.nativeElement.style.color = 'red';
        } else {
          this.blicker.nativeElement.style.background = 'red';
          this.blicker.nativeElement.style.color = 'blue';
        }
      }, 12);
      this.blickerOn = true;
    } else {
      clearInterval(this.blickerInterval);
      this.blickerOn = false;
    }
  }
  public scrollToHeight(): void {
    console.log('scorll');
    // poniważ window scoll działa tylko na html or body ellelemnt
    if (this.scollHeight) {
      document.querySelector('mat-sidenav-content').scroll({
        // tslint:disable-next-line:radix
        top: parseInt(this.scollHeight),
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  public scrollByGetElement(boxID: string): void {
    if (boxID) {
      const lookingElement = document.getElementById(boxID);
      const position = lookingElement.offsetHeight + lookingElement.offsetTop;
      console.log(lookingElement);
      console.log(position, 'pozycja');
      lookingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('nie wybrano boxa');
    }
  }

}
