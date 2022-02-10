import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';

// Import reducers
// import {ProductReducer} from '../products/reducers';
import {usersReducer} from '../users/reducers';


export default function createstore() {
return reduxCreateStore(
  combineReducers({
    users: usersReducer,
    // products: ProductReducer,
  })

)
}
