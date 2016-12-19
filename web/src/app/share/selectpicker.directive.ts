import {Directive, ElementRef, OnInit} from '@angular/core';

const plugin = 'selectpicker';

@Directive({
  selector: '[appSelectpicker]'
})
export class SelectpickerDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    $(this.element.nativeElement)[plugin]();
  }
}
