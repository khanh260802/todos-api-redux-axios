import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodosSlice'; 
const store = configureStore({
    reducer: todoReducer
})
export default store; 