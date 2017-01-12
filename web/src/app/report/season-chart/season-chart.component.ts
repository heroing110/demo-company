import {Component, OnInit} from '@angular/core';
import {SeasonChartService} from "../season-chart.service";
import {Season} from "../../../../../entity/season";
import {Report} from "../../../../../entity/report";

@Component({
    selector: 'app-season-chart',
    templateUrl: './season-chart.component.html',
    styleUrls: ['./season-chart.component.css']
})
export class SeasonChartComponent implements OnInit {
    private chartOption1;
    private chartOption2;
    private chartOption3;
    private chartOption4;

    constructor(private seasonChartService: SeasonChartService) {

    }

    ngOnInit(): void {
        this.seasonChartService.queryChart({}).then((seasons: Season[]) => {
            const years = new Set();

            seasons.sort((a, b) => parseInt(a.year) - parseInt(b.year));
            seasons.forEach((season: Season) => {
                years.add(season.year);
            });

            const series = this.getSeries();
            const series2 = this.getSeries2();
            const series3 = this.getSeries3();
            const series4 = this.getSeries4();
            let i = 0;
            years.forEach((year) => {
                let datas = seasons.filter(item => item.year == year);
                datas.forEach((data: Report & Season) => {
                    const datas = series.filter(seaie => seaie.stack == data.season);
                    datas[0].data[i] = parseInt(data.cell12) + parseInt(data.cell13);
                    datas[1].data[i] = parseInt(data.cell14);
                    datas[2].data[i] = parseInt(data.cell15);

                    const datas2 = series2.filter(seaie => seaie.stack == data.season);
                    datas2[0].data[i] = parseInt(data.cell21);
                    datas2[1].data[i] = parseInt(data.cell31);

                    const datas3 = series3.filter(seaie => seaie.stack == data.season);
                    datas3[0].data[i] = parseInt(data.cell41);
                    datas3[1].data[i] = parseInt(data.cell51);
                    datas3[2].data[i] = parseInt(data.cell61);

                    const datas4 = series4.filter(seaie => seaie.stack == data.season);
                    datas4[0].data[i] = parseInt(data.cell71);
                    datas4[1].data[i] = parseInt(data.cell81);
                });
                i++;
            });

            this.initChartOption({
                years: Array.from(years),
                series: series,
                series2: series2,
                series3: series3,
                series4: series4
            });
        });
    }

    initChartOption(params) {
        const tooltip = {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        };
        const grid = {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        };
        const xAxis = [{
            type: 'category',
            data: params.years
        }];
        const yAxis = [{
            type: 'value'
        }];

        this.chartOption1 = {
            tooltip, grid, xAxis, yAxis,
            legend: {
                data: ['商品类交易额', '服务类交易额', '电子商务服务收入']
            },
            series: params.series
        };

        this.chartOption2 = {
            tooltip, grid, xAxis, yAxis,
            legend: {
                data: ['通过自营电子商务平台', '通过第三方电子商务平台']
            },
            series: params.series2
        };

        this.chartOption3 = {
            tooltip, grid, xAxis, yAxis,
            legend: {
                data: ['B2B', 'B2C', 'C2C']
            },
            series: params.series3
        };

        this.chartOption4 = {
            tooltip, grid, xAxis, yAxis,
            legend: {
                data: ['境内', '境外']
            },
            series: params.series4
        };

    }

    getSeries() {
        return [{
            name: '商品类交易额',
            type: 'bar',
            stack: '1',
            data: []
        }, {
            name: '服务类交易额',
            type: 'bar',
            stack: '1',
            data: []
        }, {
            name: '电子商务服务收入',
            type: 'bar',
            stack: '1',
            data: []
        }, {
            name: '商品类交易额',
            type: 'bar',
            stack: '2',
            data: []
        }, {
            name: '服务类交易额',
            type: 'bar',
            stack: '2',
            data: []
        }, {
            name: '电子商务服务收入',
            type: 'bar',
            stack: '2',
            data: []
        }, {
            name: '商品类交易额',
            type: 'bar',
            stack: '3',
            data: []
        }, {
            name: '服务类交易额',
            type: 'bar',
            stack: '3',
            data: []
        }, {
            name: '电子商务服务收入',
            type: 'bar',
            stack: '3',
            data: []
        }, {
            name: '商品类交易额',
            type: 'bar',
            stack: '4',
            data: []
        }, {
            name: '服务类交易额',
            type: 'bar',
            stack: '4',
            data: []
        }, {
            name: '电子商务服务收入',
            type: 'bar',
            stack: '4',
            data: []
        }]
    }

    getSeries2() {
        return [
            {
                name: '通过自营电子商务平台',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: '通过第三方电子商务平台',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: '通过自营电子商务平台',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: '通过第三方电子商务平台',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: '通过自营电子商务平台',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: '通过第三方电子商务平台',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: '通过自营电子商务平台',
                type: 'bar',
                stack: '4',
                data: []
            }, {
                name: '通过第三方电子商务平台',
                type: 'bar',
                stack: '4',
                data: []
            },
        ]
    }

    getSeries3() {
        return [
            {
                name: 'B2B',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: 'B2C',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: 'C2C',
                type: 'bar',
                stack: '1',
                data: []
            },
            {
                name: 'B2B',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: 'B2C',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: 'C2C',
                type: 'bar',
                stack: '2',
                data: []
            },
            {
                name: 'B2B',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: 'B2C',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: 'C2C',
                type: 'bar',
                stack: '3',
                data: []
            },
            {
                name: 'B2B',
                type: 'bar',
                stack: '4',
                data: []
            }, {
                name: 'B2C',
                type: 'bar',
                stack: '4',
                data: []
            }, {
                name: 'C2C',
                type: 'bar',
                stack: '4',
                data: []
            }
        ]
    }

    getSeries4() {
        return [
            {
                name: '境内',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: '境外',
                type: 'bar',
                stack: '1',
                data: []
            }, {
                name: '境内',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: '境外',
                type: 'bar',
                stack: '2',
                data: []
            }, {
                name: '境内',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: '境外',
                type: 'bar',
                stack: '3',
                data: []
            }, {
                name: '境内',
                type: 'bar',
                stack: '4',
                data: []
            }, {
                name: '境外',
                type: 'bar',
                stack: '4',
                data: []
            },
        ]
    }

}
