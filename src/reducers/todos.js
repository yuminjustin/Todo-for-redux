import * as ACTIONS from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    chosen: false,  
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO :/*添加一条*/
	  /*state的数组 相当于array push*/
	  return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          chosen: false,
          text: action.text
        },
        ...state
      ]
	case ACTIONS.EDIT_TODO :   /*修改*/
	  return state.map( todo=>{
		 return todo.id === action.todo.id ? { ...todo, text: action.todo.text }:todo
	  })
	case ACTIONS.REMOVE_TODO: /*删除按钮删除*/
	  return state.filter( todo=>{
		 return todo.id !== action.id
	  })
	case ACTIONS.CHOOSE_ALL: /*全选*/
	  return state.map( todo=>{
		 return { ...todo, chosen: action.bool }
	  })
	case ACTIONS.CHOOSE_ONE:/*选中某一个*/  
	  return state.map( todo=>{
		 return todo.id === action.todo.id?{ ...todo, chosen:action.todo.bool }:todo
	  })
	case ACTIONS.DEL_CHOSEN: /*删除选中*/  
	   return state.filter( todo=>{
		 return todo.chosen === false
	  })  
    default:
      return state
  }
}
