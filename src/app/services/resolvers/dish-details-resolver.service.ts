import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseEntityResolver } from './base-details-resolver.service';
import { Dish } from '../entity-management/entity-management.model';
import { EntityManagementService } from '../entity-management/entity-management.service';

@Injectable({
  providedIn: 'root',
})
export class DishDetailsResolver extends BaseEntityResolver<Dish> {
  constructor(
    private readonly _entityManagementService: EntityManagementService,
    router: Router
  ) {
    super(
      router,
      { getById: (id: number) => this._entityManagementService.getDish(id) },
      '/dishes'
    );
  }
}
