import { configureStore } from '@reduxjs/toolkit'

// from features/counterSlice.js and features/themeSlice.js, by default reducer functionality of
//  each is exported so naming here may be anything just make sure import is not done inside { }
import counterSliceReducer from './features/counterSlice'
import  toggleThemeReducer  from './features/themeSlice';


export const store = configureStore({
  reducer: {  

  //mapping a global state key to a slice reducer function 
  counter: counterSliceReducer,
  theme: toggleThemeReducer,
},
});