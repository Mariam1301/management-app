import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Sale } from '../sales/sales.model';
import { SalesService } from '../sales/sales.service';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaleDetailsResolver implements Resolve<Sale | null> {
  constructor(private _saleService: SalesService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Sale | null> {
    const saleId = Number(route.queryParamMap.get('saleId'));

    if (!saleId) {
      this.router.navigate(['/sales'], { replaceUrl: true });
      return of(null);
    }

    return this._saleService.getSaleById(saleId).pipe(
      map((data) => {
        if (!data || Object.keys(data).length === 0) {
          this.router.navigate(['/sales'], { replaceUrl: true });
          return null;
        }
        return data;
      }),
      catchError((error) => {
        this.router.navigate(['/sales'], { replaceUrl: true });
        return of(null);
      })
    );
  }
}
