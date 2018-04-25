import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UriConstant} from './uri.constant';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class EconomicService {

    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            // console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            // return of(result as T);
            return of(error as T);
        };
    }

    /**
     * 中债国债收益率曲线
     * @param startDate
     * @param endDate
     * @returns {Observable<{errMsg: string}|any>}
     */
    public getChinaTreasuryYields(startDate = moment().subtract(1, 'years').format('YYYY/MM/DD'),
                                  endDate = moment().format('YYYY/MM/DD')): Observable<any> {
        return this._httpClient
            .get(UriConstant.ChinaBond(encodeURIComponent(startDate), encodeURIComponent(endDate)))
            .pipe(
                catchError(this.handleError('getChinaTreasuryYields', {errMsg: '#getChinaTreasuryYields#访问失败'}))
            );
    }
}
