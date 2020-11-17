import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {
  @Input() name = '';
  @Input() imgSrc = '';
  private imgBox: HTMLElement;
  private divName: HTMLElement;
  private backGroundColors = ['#d68c1c', '#478c0a', '#23cf98', '#82a2e8', '#c254c4'];


  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    this.imgBox = this.renderer.createElement('img');
    this.imgBox = this.renderer.createElement('div');
   }

  ngOnInit(): void {
    // if (this.imgSrc) {
    //   this.renderer.setAttribute(this.imgBox, 'src', this.imgSrc);
    //   this.renderer.appendChild(this.element.nativeElement, this.imgBox);
    //   return;
    // }
    const randomIndex = Math.ceil(Math.random() * this.backGroundColors.length - 1);
    console.log(randomIndex, 'randomIndex');
  }

}
