import { createAction, props } from '@ngrx/store';

export const mainAction = createAction('[Main Action]', props<any>());
export const getCharacterData = createAction('[Characters List] Get character details', props<{ url: string }>());
export const setCharacterData = createAction('[Effects] Set character details', props<{ data: any }>());
