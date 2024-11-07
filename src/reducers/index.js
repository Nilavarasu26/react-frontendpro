import { combineReducers } from 'redux';
import {dCandidate} from './dCandidate'; // assuming dCandidate is the default export of your reducer

// Configure the store
export const reducers=combineReducers({
    dCandidate
})
