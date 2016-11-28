import React, { PropTypes,Component } from 'react'

export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
    //completeTodo: PropTypes.func.isRequired
  }

  state = {
	 edit:0,
	 showDel:0,
	 text:this.props.todo.text ||""
  }
  
  onChange = e =>{
	 this.setState({ text: e.target.value })
  }
  
  doEdit = e =>{
	 this.setState({ edit: 1})
  }
  
  onEdit = () =>{
	  this.props.editTodo({
		  id:this.props.todo.id,
		  text:this.state.text
	  })
	  this.onCancel();
  }
  
  onCancel = () =>{
	  this.setState({ edit: 0 })
  }
  
  onCheck = () =>{
	  this.props.chooseOne({
		  bool:this.refs.choose.checked,
		  id:this.props.todo.id
	  })
  }
  
  onMouseover = () =>{
	  this.setState({showDel:1});
  }
  
  onMouseout = () =>{
	 this.setState({showDel:0}); 
  }
  
  componentDidMount (){
	  this.refs.choose.checked = this.props.todo.chosen 
  }
  
  componentDidUpdate(){
	  this.refs.choose.checked = this.props.todo.chosen
  }

  render() {
	let todo = this.props.todo,
		elems,operate = [
			<button key={todo.id+"_d"} style={{
			   marginRight: "8px",
			   display:this.state.showDel?"inline-block":"none"
			}} onClick={()=>this.props.removeTodo(todo.id)} onMouseOver={this.onMouseover}>删除</button>
		];   
    if(this.state.edit){/*编辑状态*/
		elems = (
			<div className="l">
			   <input type="text" className="l db" value={this.state.text} onChange={this.onChange}/>
			</div>
		);
		operate = [
          <button key={todo.id+"_e"} style={{marginRight: "8px"}} onClick={this.onEdit}>修改</button>,
		  <button key={todo.id+"_c"} style={{marginRight: "8px"}} onClick={this.onCancel}>取消</button>,
		 ...operate]
	}
	else {
		elems = (
		  <div className="l">
			<span className="db l ellipsis" style={{
			    textDecoration: this.props.todo.chosen?"line-through":""
			}} onDoubleClick={this.doEdit}>{todo.text}</span>
		  </div>	
		)  
	} 
	  
	  
    return (
		<li onMouseOver={this.onMouseover} onMouseOut={this.onMouseout}>
		  <input type="checkbox" className="l db" onClick={this.onCheck} ref="choose"/>
		  {elems}
		  <div className="operate r">
		    {operate}
		   </div>
		</li>
    )
  }
}
