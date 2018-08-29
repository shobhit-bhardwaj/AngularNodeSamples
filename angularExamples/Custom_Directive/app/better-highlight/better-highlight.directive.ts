import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //  this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';

  @HostListener('mouseover') mouseOver() {
    //  this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeave() {
    //  this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    this.bgColor = 'transparent';
  }
}
