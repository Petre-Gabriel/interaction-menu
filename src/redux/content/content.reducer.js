import Configuration from '../../app.config';
import { contentActionTypes } from './content.types';

const {defaults} = Configuration;

const INITIAL_STATE = {
    title: defaults.title,
    description: defaults.description
}

const ContentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case contentActionTypes.UPDATE_CONTENT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default ContentReducer;