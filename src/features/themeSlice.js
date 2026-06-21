import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name:'themes',
    
  initialState:{
    //initially set darkmode = false
    darkMode:false
  },

  reducers:{

     toggleTheme:(state,action)=>{

      //toggles and assign toggled value, darkmode = !darkmode
      // previous false becomes !false i.e true
      state.darkMode =!state.darkMode
    }
  }}
);

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;