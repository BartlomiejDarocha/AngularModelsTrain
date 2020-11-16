import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {
  @Input() name = '';
  @Input() imgSrc = '';
  private imgBox: HTMLElement;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    this.imgBox = this.renderer.createElement('img');
    console.log(this.imgBox, 'imgBox');
   }

  ngOnInit(): void {
    if (this.imgSrc) {
      this.renderer.setAttribute(this.imgBox, 'src', this.imgSrc);
      this.renderer.appendChild(this.element.nativeElement, this.imgBox);
      return;
    }

  }

}
