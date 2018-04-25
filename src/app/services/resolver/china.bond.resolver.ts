import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EconomicService} from '../economic.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ChinaBondResolver implements Resolve<any> {
    constructor(private economicService: EconomicService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.economicService.getChinaTreasuryYields();
    }
}
