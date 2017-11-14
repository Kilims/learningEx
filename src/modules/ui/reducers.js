import { handleAction, combineActions } from 'redux-actions';

import {
    RECEIVE_ADD_ITEM,

    receiveAddItem
} from './actions';

var defaultState = {
    items:[]
};

export const ui = handleAction(combineActions(receiveAddItem),
    {
        next(state, action){
            switch (action.type) {
                case RECEIVE_ADD_ITEM:
                    var newState = {
                        ...state
                    };

                    newState.item = [].concat(newState.items);

                    if (Array.isArray(action.payload)) {
                        newState.items = newState.items.concat(action.payload);
                    } else {
                        newState.items.push(action.payload);
                    }
                    return newState;
            
                default:
                    return state;
            }
        },
        throw(state, action){
            switch (action.type) {
                case RECEIVE_ADD_ITEM:
                    var newState = {
                        ...state
                    };
                    
                    newState.itemsError = action.payload;
                    return newState;
            
                default:
                    return state;
            }
        }
    }, defaultState    
)