import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { StarWarsService } from '../star-wars.service';
import { getCharacterData, setCharacterData } from './actions';

@Injectable({ providedIn: 'root' })
export class MainEffects {
  getCharacterDetails$ = createEffect(
    () => this.actions$.pipe(
      ofType(getCharacterData),
      mergeMap(action => this.starWarsService.getCharacterDetails(action.url)),
      map(response => this.store.dispatch(setCharacterData({ data: response })))
    ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly starWarsService: StarWarsService, private readonly store: Store) { }
}
