import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const API = 'https://655c3451ab37729791aa1107.mockapi.io/todos'; 
const TodosSlice = createSlice({
    name: 'todos', 
    initialState: {
        id: 1, 
        userName: 'Khanh123',
        todos: []
    }, 
    reducers: {
        Set: (state, action) => {
            return action.payload; 
        },
        Add: (state, action) => {
            state.todos.push({
                name: action.payload, 
                id: Math.random()
            })
            axios.put(API+'/'+state.id, state); 
        }, 
        Toggle: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            axios.put(API+'/'+state.id, state); 
        }, 
        Delete: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            axios.put(API+'/'+state.id, state); 
        }, 
        Update: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            if (todo) {
                todo.name = action.payload.name
            }
            axios.put(API+'/'+state.id, state); 
        }
    }
})

export default TodosSlice.reducer; 
export const {Set, Add, Delete,Toggle,Update} = TodosSlice.actions; 