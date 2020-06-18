import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorPurple]'
})
export class PurpleDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = '#402894';
  }

}
