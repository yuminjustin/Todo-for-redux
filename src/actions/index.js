import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const editTodo = todo => ({ type: types.EDIT_TODO, todo })
export const removeTodo = id => ({ type: types.REMOVE_TODO, id })
export const chooseAll = bool => ({ type: types.CHOOSE_ALL, bool })
export const chooseOne = todo => ({ type: types.CHOOSE_ONE, todo })
export const delChosen = () =>({type: types.DEL_CHOSEN})
