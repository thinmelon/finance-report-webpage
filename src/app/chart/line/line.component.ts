import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
    // lineChart
    public lineChartData: Array<any>;
    public lineChartLabels: Array<string>;
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        // { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        // },
        // { // dark grey
        //     backgroundColor: 'rgba(77,83,96,0.2)',
        //     borderColor: 'rgba(77,83,96,1)',
        //     pointBackgroundColor: 'rgba(77,83,96,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(77,83,96,1)'
        // },
        // { // grey
        //     backgroundColor: 'rgba(148,159,177,0.2)',
        //     borderColor: 'rgba(148,159,177,1)',
        //     pointBackgroundColor: 'rgba(148,159,177,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        // }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { chinaBondResolver: any }) => {
                // console.log(data);
                const margin = [], oneYear = [], tenYear = [], date = [];
                for (let i = 0, length = data.chinaBondResolver.date.length; i < length; i++) {
                    oneYear[i] = data.chinaBondResolver.oneYear[length - 1 - i];
                    tenYear[i] = data.chinaBondResolver.tenYear[length - 1 - i];
                    date[i] = data.chinaBondResolver.date[length - 1 - i];
                    margin[i] = tenYear[i] - oneYear[i];
                }
                this.lineChartData = [
                    {data: oneYear, label: '一年期'},
                    {data: tenYear, label: '十年期'},
                    {data: margin, label: '收益率差'},
                ];
                this.lineChartLabels = date;
            });
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

}
