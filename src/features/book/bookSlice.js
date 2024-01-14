import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    arr: [
        { id: 100, name: "aaa", price: 50, aotur: "cdfcvhj" },
        { id: 200, name: "bbb", price: 60, aotur: "ww" },
        { id: 300, name: "ccc", price: 81, aotur: "rtttt" },
    ],
    selectedForEdit: null,
    selectedForShow: null
}



export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        add: (state, action) => {
            action.payload.id = state.arr.length;
            state.arr.push(action.payload);
        },
        deletee: (state, action) => {
            let id = action.payload;
            let index = state.arr.findIndex(item => item.id == id);
            state.arr.splice(index, 1);
        },
        selectForEdit: (state, action) => {
            state.selectedForEdit = action.payload;
        },
        selectForShow: (state, action) => {
            state.selectedForShow = action.payload;
        },
        saveEditedObject: (state, action) => {
            let index = state.arr.findIndex(item => item.id == action.payload.id);
            state.arr[index] = action.payload;
            state.selectedForEdit = null;
       },
       reset: (state) => {
        state= null;
      },
  
    },
})

export const {add,deletee,saveEditedObject,selectForEdit,selectForShow  } = bookSlice.actions


export default bookSlice.reducer;

