import React, { PropTypes,Component } from 'react'
import TodoTextInput from './todoTextInput'

export default class Header extends Component {
   static propTypes = {
    actions: PropTypes.object.isRequired,
	todos: PropTypes.array.isRequired   
  }

  handleSave = text => {
	if (text.length !== 0) {
      this.props.actions.addTodo(text) //通过action 调用reducer 对应的方法
    }
  }
  
  isChooseAll () { //是否是全选
	 let n1 = this.props.todos.length,
		 n2 = 0;
	 for(var i = 0;i<n1;i++){
		 n2 = this.props.todos[i].chosen?n2+1:n2
	 }
	 return n1!==0&&n1===n2
  }

  render() { 
    return (
      <div className="c addbox">
		<TodoTextInput isChooseAll={this.isChooseAll()} onSave={this.handleSave} chooseAll={this.props.actions.chooseAll}/>
	  </div>
    )
  }
}
