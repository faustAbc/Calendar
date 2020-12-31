import React from 'react';
import TypescriptReact from './TypescriptReact/TypescriptReact';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

const App = () => {
  return (
    <Provider store={store}>
      <TypescriptReact />
    </Provider>
  );
};

export default App;
