import { createAction } from 'redux-actions';
//action     type
//request*   REQUEST_*
//receive*   RECEIVE_*

export const REQUEST_ADD_ITEM = 'REQUEST_ADD_ITEM';
export const RECEIVE_ADD_ITEM = 'RECEIVE_ADD_ITEM';

export const requestAddItem = createAction(REQUEST_ADD_ITEM);
export const receiveAddItem = createAction(RECEIVE_ADD_ITEM);    
