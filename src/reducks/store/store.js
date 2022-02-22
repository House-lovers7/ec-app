import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// Import reducers
import {ProductsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';

export default function createstore(history) {

  const logger = createLogger({
    collapsed: true,
    diff: true,
  })
return reduxCreateStore(
  combineReducers({
    router: connectRouter(history),
    users: UsersReducer,
    products: ProductsReducer
  }),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
)
)
}
