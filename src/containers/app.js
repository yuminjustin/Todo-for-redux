import React, { PropTypes }  from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/head'
import Main from '../components/main'
import * as Actions from '../actions'

const App = ({todos, actions})=>{
	return <div className="mainbox m oh">
	   <h1>Redux todo</h1>
	   <Header todos={todos} actions={{
			addTodo:actions.addTodo,
			chooseAll:actions.chooseAll			
	   }}/> 
	   <Main todos={todos} actions={actions}/>	
    </div>
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)   //发送action
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
