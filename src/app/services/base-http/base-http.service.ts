import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  BaseHttpActions,
  HttpRequestOptions,
  ParamsType,
} from './base-http.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService implements BaseHttpActions {
  constructor(
    public httpClient: HttpClient,
    private readonly _toastService: MessageService
  ) {}

  Get(url: string, params?: ParamsType, options?: HttpRequestOptions) {
    return this.httpClient
      .get(url, { params: this.createParams(params) })
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Post(
    url: string,
    data: any,
    params?: ParamsType,
    options?: HttpRequestOptions
  ) {
    return this.httpClient
      .post(url, data, { params: this.createParams(params) })
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Delete(url: string, params?: ParamsType, options?: HttpRequestOptions) {
    return this.httpClient
      .delete(url, { params: this.createParams(params) })
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  Put(
    url: string,
    data: any,
    params?: ParamsType,
    options?: HttpRequestOptions
  ) {
    return this.httpClient
      .put(url, data, { params: this.createParams(params) })
      .pipe(tap((x) => this.HandleResponse(x)));
  }

  private createParams(params?: ParamsType) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.append(key, value);
      });
    }
    return httpParams;
  }

  private HandleResponse(response: any) {
    if (response.Status === 500) {
      this.handleErrorResponse('500 სერვერის პრობლემა');
    }
  }

  private handleErrorResponse(errorMessage: string) {
    this._toastService.add({
      severity: 'error',
      summary: 'მოხდა შეცდომა',
      detail: errorMessage,
    });
  }
}
