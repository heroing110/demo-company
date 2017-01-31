import {Directive, Input, Output, EventEmitter, OnInit, OnDestroy, ElementRef} from '@angular/core';

const plugin = 'daterangepicker';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit,OnDestroy {
  private _value;
  private _picker;

  @Input() set value(val) {
    this._value = val;
    if (this._picker && this.input.val() != val) {
      this.ngOnDestroy();
      this.ngOnInit();
    }
  };

  @Output() valueChange = new EventEmitter<string|Object>();

  @Input() option: any;

  constructor(private element: ElementRef) {
  }

  private input;
  private initOption;

  ngOnInit(): void {
    this.initOption = $.extend(true, {
      locale: {
        "format": "YYYY-MM-DD",
      }
    }, this.option || {});

    this.setDateOption(this.initOption);

    const format = this.initOption.locale.format;

    this.input = $(this.element.nativeElement);
    this.input[plugin](this.initOption);
    this._picker = this.input.data(plugin);

    this.input.on('apply.daterangepicker', (...args) => {
      let start = this._picker.startDate.format(format);
      if (this.initOption.singleDatePicker) {
        this.valueChange.next(start);
      } else {
        this.valueChange.next({
          start,
          end: this._picker.endDate.format(format)
        });
      }
    });

    if (!this._value) {
      this.input.val('');
    }

    if (this._value) {
      this.input.trigger('apply.daterangepicker');
    }
  }

  private setDateOption(option) {
    if (this._value) {
      if (this.initOption.singleDatePicker) {
        option.startDate = option.endDate = this._value;
      } else {
        option.startDate = this._value.start;
        option.endDate = this._value.end;
      }
    }
  }

  ngOnDestroy(): void {
    this._picker.remove();
    this.input.off('apply.daterangepicker');
  }
}
