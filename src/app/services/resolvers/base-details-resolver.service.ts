import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class BaseEntityResolver<T> implements Resolve<T | null> {
  constructor(
    private router: Router,
    private service: { getById: (id: number) => Observable<T | null> },
    private fallbackUrl: string
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<T | null> {
    const id = Number(route.queryParamMap.get('id'));

    if (!id) {
      this.router.navigate([this.fallbackUrl], { replaceUrl: true });
      return of(null);
    }

    return this.service.getById(id).pipe(
      map((data) => {
        if (!data || Object.keys(data).length === 0) {
          this.router.navigate([this.fallbackUrl], { replaceUrl: true });
          return null;
        }
        return data;
      }),
      catchError((error) => {
        this.router.navigate([this.fallbackUrl], { replaceUrl: true });
        return of(null);
      })
    );
  }
}
