import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth:authReducer,
  form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>
export type AllActions<T> = T extends {[key:string]: infer U} ? U : never 
export type ActionThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, RootState, unknown, A>

export default store;

