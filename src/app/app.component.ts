import {
  decrement,
  increment,
  toggleDisable,
  writeText,
} from './store/counter/counter.action';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CounterModel } from './store/counter/counter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'management-app';

  count$!: Observable<number>;
  disabled$!: Observable<boolean>;
  text$!: Observable<string>;

  constructor(private readonly _store: Store<{ count: CounterModel }>) {
    this.count$ = this._store.select('count').pipe(map((store) => store.count));
    this.text$ = this._store.select('count').pipe(map((store) => store.text));
    this.disabled$ = this._store
      .select('count')
      .pipe(map((store) => store.disabled));
  }

  increment() {
    this._store.dispatch(increment());
  }

  decrement() {
    this._store.dispatch(decrement());
  }

  toggle() {
    this._store.dispatch(toggleDisable());
  }

  writeText() {
    this._store.dispatch(writeText({ text: 'hello' }));
  }
}
