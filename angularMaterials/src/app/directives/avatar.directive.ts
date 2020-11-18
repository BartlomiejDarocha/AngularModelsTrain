import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {
  @Input() name = 'Name';
  @Input() imgSrc = '';
  private imgBox: HTMLElement;
  private divName: HTMLElement;
  private divNameFirstLetter: HTMLElement;
  private backGroundColors = ['#d68c1c', '#478c0a', '#23cf98', '#82a2e8', '#c254c4'];


  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    this.element.nativeElement.classList.add('avatarDirective');
    this.imgBox = this.renderer.createElement('img');
    this.divName = this.renderer.createElement('div');
    this.divName.classList.add('avatarNoImg');
    this.divNameFirstLetter = this.renderer.createElement('div');
   }

  ngOnInit(): void {
    if (this.imgSrc) {
      this.renderer.setAttribute(this.imgBox, 'src', this.imgSrc);
      this.renderer.appendChild(this.element.nativeElement, this.imgBox);
      return;
    }
    const randomIndex = Math.round(Math.random() * (this.backGroundColors.length - 1));
    this.renderer.setProperty(this.divNameFirstLetter, 'innerText', this.name.charAt(0));
    this.renderer.setStyle(this.divName, 'background-color', this.backGroundColors[randomIndex]);
    this.renderer.appendChild(this.divName, this.divNameFirstLetter);
    this.renderer.appendChild(this.element.nativeElement, this.divName);
  }

}
