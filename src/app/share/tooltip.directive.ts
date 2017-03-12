import {Directive, OnInit, ElementRef, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit,OnDestroy {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    $(this.element.nativeElement).tooltip();
  }

  ngOnDestroy(){
    $(this.element.nativeElement).tooltip('destroy')
  }

}
