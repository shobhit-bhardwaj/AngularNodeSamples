import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appInputHighlight]'
})
export class InputHighlightDirective {

  @Input() defaultColor: string = 'cyan';
  @Input('appInputHighlight') highlightColor: string = 'blue';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseover') mouseOver() {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = this.defaultColor;
  }
}
