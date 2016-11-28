import React, { PropTypes,Component } from 'react'
import Item from './item'
import Footer from './foot'

const Filter = {
	show_all: () => true,
	show_unChosen: todo => !todo.chosen,
	show_Chosen: todo => todo.chosen
}

export default class Main extends Component {
  static propTypes = { /*来自app*/
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  
  state = { filter: "show_all" }
  
  onShow = (filter) =>{
	  this.setState({filter})
  }

  render() {
	const { todos, actions } = this.props
	const filteredTodos = todos.filter(Filter[this.state.filter])

    return (
	   <div>	
          <div className="c oh listbox">
		    <ul>
		      {filteredTodos.map(todo =>
                <Item key={todo.id} todo={todo} {...actions} />
              )}		
		    </ul>
	      </div>
		  <Footer todos={todos} {...actions} filter={this.state.filter} onShow={this.onShow}/>		
	  </div>		
	  
    )
  }
}
