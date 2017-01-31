import {Directive, ElementRef, OnInit, Input} from '@angular/core';

const plugin = 'selectpicker';

@Directive({
    selector: '[appSelectpicker]'
})
export class SelectpickerDirective implements OnInit {
    private firstSet = true;

    @Input() set ngModel(val) {
        if (this.firstSet) {
            $(this.element.nativeElement).val(val || '');
        }
        this.firstSet = false;
    };

    constructor(private element: ElementRef) {
    }

    ngOnInit(): void {
        $(this.element.nativeElement)[plugin]();
    }
}
