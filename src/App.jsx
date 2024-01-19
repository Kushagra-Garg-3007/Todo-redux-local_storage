import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      <div className='m-auto flex flex-col items-center'>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
