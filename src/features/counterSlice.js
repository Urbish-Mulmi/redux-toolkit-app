import { createSlice } from '@reduxjs/toolkit'
const counterSliceContainer = createSlice(
  // { name:'   ',
  // initialState:{value:  }  ,
  // reducers:{ functionName:(state,action)=>{ logic }}
  // }

  {name : 'countfunctions',   initialState:{value:0},

  reducers:{
    increment:(state, action)=>{ state.value = state.value+1;},

    decrement:(state, action)=>{
      if (state.value>0) { state.value = state.value-1;}
    },

    increaseByAmt:(state, action)=>{
      state.value = state.value+ Number (action.payload)                  
    } }
  })

// export each reducer functions
export const {increment,decrement,increaseByAmt} =counterSliceContainer.actions;
// export default reducer functionality of sliceContainer (Very important to do export default for ease of import in store)
export default counterSliceContainer.reducer