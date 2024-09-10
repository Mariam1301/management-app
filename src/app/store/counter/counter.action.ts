import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const toggleDisable = createAction('toggleDisable');
export const writeText = createAction('writeText', props<{ text: string }>());
