import { Observable } from 'rxjs';

export type ParamsType = { [key: string]: string | number | boolean };

export type HttpRequestOptions = {
  loaderId?: string;
  showSuccessMessage?: boolean;
};

export interface BaseHttpActions {
  Get(
    url: string,
    params?: ParamsType,
    options?: HttpRequestOptions
  ): Observable<any>;

  Post(
    url: string,
    data: any,
    params?: ParamsType,
    options?: HttpRequestOptions
  ): Observable<any>;

  Delete(
    url: string,
    params?: ParamsType,
    options?: HttpRequestOptions
  ): Observable<any>;

  Put(
    url: string,
    data: any,
    params?: ParamsType,
    options?: HttpRequestOptions
  ): Observable<any>;
}
