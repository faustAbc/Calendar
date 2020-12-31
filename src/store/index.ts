import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { datesReducer } from './dates/reducers';

export const rootReducer = combineReducers({
  dates: datesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
