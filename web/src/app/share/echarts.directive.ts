import {Directive, Input, OnInit, OnDestroy, ElementRef} from '@angular/core';

declare const echarts;

@Directive({
    selector: '[appEcharts]'
})
export class EchartsDirective implements OnInit,OnDestroy {
    private _option;

    @Input() set option(value) {
        if (this.chart) {
            if (value) {
                this.chart.setOption(value);
            } else {
                this.chart.clear();
            }
        } else {
            this._option = value;
        }
    };

    private chart;

    constructor(private element: ElementRef) {
    }

    ngOnInit(): void {
        this.chart = echarts.init(this.element.nativeElement);
        if (this._option) {
            this.chart.setOption(this._option);
        }
    }

    ngOnDestroy(): void {
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }
}
