import { Action, createReducer, on } from '@ngrx/store';
import { mainAction } from './actions';

export const mainFeatureKey = 'Main';

export interface MainState { }

const initialState: MainState = {};

const _mainReducer = createReducer(
  initialState,
  on(mainAction, (state, action) => {
    return {
      ...state
    };
  }),
);

export function mainReducer(state: MainState | undefined, action: Action) {
  return _mainReducer(state, action);
}
