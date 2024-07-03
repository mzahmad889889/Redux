import {configureStore} from '@reduxjs/toolkit'

import  todoReducer  from '../Features/Todos';

export const store = configureStore({
    reducer: todoReducer
});