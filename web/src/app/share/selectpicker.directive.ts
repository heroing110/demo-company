import {Directive, ElementRef, OnInit, Input} from '@angular/core';

const plugin = 'selectpicker';

@Directive({
  selector: '[appSelectpicker]'
})
export class SelectpickerDirective implements OnInit {

  @Input() set ngModel(val) {
    val && $(this.element.nativeElement).val(val);
  };

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    $(this.element.nativeElement)[plugin]();
  }
}
