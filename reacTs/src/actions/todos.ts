import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo
  payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  // Study Type Annotation files, it is the hardest part to make React/Redux to work nicely with Typescript.
  // e.g. the Dispatch Type.
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    dispatch<FetchTodosAction>({
      // redux type
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}

