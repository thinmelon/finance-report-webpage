import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RadarComponent} from './chart/radar/radar.component';
import {PolarAreaComponent} from './chart/polar-area/polar-area.component';
import {PieComponent} from './chart/pie/pie.component';
import {LineComponent} from './chart/line/line.component';
import {DoughnutComponent} from './chart/doughnut/doughnut.component';
import {BarComponent} from './chart/bar/bar.component';
import {ChinaBondResolver} from './services/resolver/china.bond.resolver';

const __ROUTES__: Routes = [
    {
        path: 'chart',
        children: [
            {
                path: 'bar',
                component: BarComponent
            },
            {
                path: 'doughnut',
                component: DoughnutComponent
            },
            {
                path: 'line',
                component: LineComponent,
                resolve: {
                    chinaBondResolver: ChinaBondResolver
                }
            },
            {
                path: 'pie',
                component: PieComponent
            },
            {
                path: 'polar-area',
                component: PolarAreaComponent
            },
            {
                path: 'radar',
                component: RadarComponent
            }
        ]
    }
];

@NgModule({
    // The forRoot() method is called because a configured router is provided at the app's root.
    // The forRoot() method supplies the Router service providers and directives needed for routing.
    // And performs the initial navigation based on the current browser URL.
    imports: [RouterModule.forRoot(
        __ROUTES__,
        {
            enableTracing: false        // <-- debugging purposes only
        }
    )],
    exports: [RouterModule],
    providers: [
        ChinaBondResolver
    ]
})
export class AppRouterModule {
}
