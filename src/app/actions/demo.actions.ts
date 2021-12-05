import { Action } from '@ngrx/store';
import { Demo } from '../modal/demo.modal';

export const ADD_DEMO = 'Add Demo';
export const REMOVE_DEMO = 'Remove Demo';

export class AddDemo implements Action {
    readonly type = ADD_DEMO;

    constructor(public payload: Demo) {}
}

export class RemoveDemo implements Action {
    readonly type = REMOVE_DEMO;

    constructor(public payload: number) {}
}

export type Actions = AddDemo | RemoveDemo;