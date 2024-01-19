import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false
      }
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      if (confirm("Do You really want to delete it")) {
        state.todos = state.todos.filter((todo) => (
          todo.id != action.payload
        ))
      }

    },
    todoComplete: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.completed = !todo.completed;
        }
      })
    },
    storeTodos: (state, action) => {
      state.todos = action.payload
    }
  }
})

export const { addTodo, removeTodo, storeTodos, todoComplete } = todoSlice.actions;
export default todoSlice.reducer;