import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { Dish, EntityAddModel, Ingredient } from './entity-management.model';

@Injectable({
  providedIn: 'root',
})
export class EntityManagementService {
  entityName = 'entity';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getAllIngredients() {
    return this._baseHttpService.get<Ingredient[]>(
      `${this.entityName}/ingredients`,
      undefined,
      { loaderId: 'ingredient' }
    );
  }

  getDishes() {
    return this._baseHttpService.get<Dish[]>(
      `${this.entityName}/dishes`,
      undefined,
      { loaderId: 'dishes' }
    );
  }

  addEntity(data: EntityAddModel) {
    return this._baseHttpService.post<unknown, EntityAddModel>(
      `${this.entityName}`,
      data
    );
  }

  deleteEntity(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}`);
  }
}
