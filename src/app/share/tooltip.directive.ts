import {Directive, OnInit, ElementRef} from '@angular/core';

const plugin = 'tooltip';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    $(this.element.nativeElement)[plugin]();
  }
}
