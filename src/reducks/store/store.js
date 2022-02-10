import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
// Import reducers
// import {ProductReducer} from '../products/reducers';
import {usersReducer} from '../users/reducers';

export default function createstore(history) {
return reduxCreateStore(
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
  }),
  applyMiddleware(
    routerMiddleware(history),
    thunk
)
)
}
