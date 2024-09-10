import { createReducer, on } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
  toggleDisable,
  writeText,
} from './counter.action';
import { CounterModel } from './counter.model';

export const initialState: CounterModel = {
  count: 1,
  disabled: false,
  text: '',
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, () => ({ disabled: false, count: 0, text: '' })),
  on(toggleDisable, (state) => ({ ...state, disabled: !state.disabled })),
  on(writeText, (state, { text }) => ({ ...state, text }))
);
