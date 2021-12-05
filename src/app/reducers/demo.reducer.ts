import { Demo } from "../modal/demo.modal";
import * as DemoActions from './../actions/demo.actions';

const initialState: Demo = {
    name: 'Harisudhan',
    gender: 'Male'
}

export function reducer(state: Demo[] = [initialState], action: DemoActions.Actions) {
    switch(action.type) {
        case DemoActions.ADD_DEMO:
            return [...state, action.payload];
        case DemoActions.REMOVE_DEMO:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}