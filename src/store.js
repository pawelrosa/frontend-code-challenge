import { createStore } from 'redux';
import rootReducer from './reducers/root_reducer';

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
