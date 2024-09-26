import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// // 선택지 두 개 1.state를 mutate하기 2.새로운 state "return"하기(그래서 deleteToDo는 return해줌)
// const reducer = createReducer([], {
//   //장점1. 액션이 addToDo/deleteToDo 일 때 |장점2. state를 mutate하기 쉽게 만들어줌
//   [addToDo] : (state, action) => {
//     state.push({text:action.payload, id:Date.now()});
//   },
//   [deleteToDo] : (state, action) => 
//     state.filter(toDo => toDo.id !== action.payload)
// });

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers : {
    add: (state, action) => {
      state.push({text:action.payload, id:Date.now()});
    },
    remove: (state, action) => 
        state.filter(toDo => toDo.id !== action.payload)
  }
})

export const { add, remove } = toDos.actions;

export default configureStore({reducer : toDos.reducer});
