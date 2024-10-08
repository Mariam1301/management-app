import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import {
  Dish,
  EntityFilterModel,
  EntityModel,
} from './entity-management.model';

@Injectable({
  providedIn: 'root',
})
export class EntityManagementService {
  entityName = 'entity';

  constructor(private readonly _baseHttpService: BaseHttpService) {}

  getDish(id: number) {
    return this._baseHttpService.get<Dish>(
      `${this.entityName}/dishes/${id}`,
      undefined,
      { loaderId: 'dish' }
    );
  }

  getAllIngredients(
    pageNumber?: number,
    pageSize?: number,
    filter?: EntityFilterModel
  ) {
    return this._baseHttpService.get<{ data: EntityModel[] }>(
      `${this.entityName}/ingredients`,
      { page: pageNumber, per_page: pageSize, ...filter },
      { loaderId: 'ingredient' }
    );
  }

  getDishes(
    pageNumber?: number,
    pageSize?: number,
    filter?: EntityFilterModel
  ) {
    return this._baseHttpService.get<{ data: EntityModel[] }>(
      `${this.entityName}/dishes`,
      { page: pageNumber, per_page: pageSize, ...filter },
      { loaderId: 'dishes' }
    );
  }

  addEntity(data: EntityModel) {
    return this._baseHttpService.post<
      { message: string; id: number },
      EntityModel
    >(`${this.entityName}`, data);
  }

  deleteEntity(id: number) {
    return this._baseHttpService.delete<unknown>(`${this.entityName}/${id}`);
  }

  updateIngredient(ingredient: EntityModel) {
    return this._baseHttpService.put<unknown, EntityModel>(
      `${this.entityName}/ingredients/${ingredient.id}`,
      ingredient
    );
  }

  updateDish(dish: Partial<Dish>) {
    return this._baseHttpService.put<unknown, Partial<Dish>>(
      `${this.entityName}/dishes/${dish.id}`,
      dish
    );
  }
}
