import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnInit {
  @Input() child: HTMLElement;
  @Input() startHeight = 0;
  @HostListener('click')
  onclick() {
    if (this.child.classList.contains('active')) {
      this.child.style.height = this.startHeight + 'px';
      this.child.classList.remove('active');
      this.element.nativeElement.classList.remove('active');
    } else {
      this.child.style.height = `${this.child.scrollHeight}px`;
      this.child.classList.add('active');
      this.element.nativeElement.classList.add('active');
    }
  }

  constructor(
    private element: ElementRef
  ) { }
  ngOnInit(): void {
    this.child.style.height = `${this.startHeight}px`;
  }

}
