import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appElseDirective]'
})
export class ElseDirectiveDirective {

  @Input() set appElseDirective(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

}
