import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';

import {EconomicService} from './services/economic.service';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app.router.module';
import {LineComponent} from './chart/line/line.component';
import {BarComponent} from './chart/bar/bar.component';
import {DoughnutComponent} from './chart/doughnut/doughnut.component';
import {RadarComponent} from './chart/radar/radar.component';
import {PieComponent} from './chart/pie/pie.component';
import {PolarAreaComponent} from './chart/polar-area/polar-area.component';



@NgModule({
    declarations: [
        AppComponent,
        LineComponent,
        BarComponent,
        DoughnutComponent,
        RadarComponent,
        PieComponent,
        PolarAreaComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule,
        HttpClientModule,
        AppRouterModule
    ],
    providers: [
        EconomicService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
