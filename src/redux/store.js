import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

export default configureStore({
  reducer: {}}, composeWithDevTools( )
);