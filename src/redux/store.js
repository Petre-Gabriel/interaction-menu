import {createStore} from 'redux'

import ContentReducer from './content/content.reducer';

const store = createStore(ContentReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;