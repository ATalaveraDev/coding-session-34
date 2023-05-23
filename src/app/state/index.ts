import { Action, createReducer, on } from '@ngrx/store';

import { setCharacterData } from './actions';

export const mainFeatureKey = 'Main';

export interface MainState {
  characters: any[];
}

const initialState: MainState = {
  characters: []
};

const _mainReducer = createReducer(
  initialState,
  on(setCharacterData, (state, action) => {
    return {
      ...state,
      characters: [...state.characters].concat(action.data)
    };
  }),
);

export function mainReducer(state: MainState | undefined, action: Action) {
  return _mainReducer(state, action);
}
