import React, {PropTypes,Component} from 'react'

export default class TodoTextInput extends Component {
  static propTypes = {
     onSave:PropTypes.func.isRequired,
	 chooseAll:PropTypes.func.isRequired,
	 isChooseAll:PropTypes.bool.isRequired
  }

  state = {
    text: this.props.text || ''
  }
  
  keyDownSubmit = e =>{
	  if(e.which === 13) this.handleSubmit()
  }

  handleSubmit = () => {
	 if(this.refs.text.value) {
		 this.props.onSave(this.refs.text.value)
		 this.refs.text.value = "";
	 }
	 else return false
  }
  
  handleChooseAll = () =>{
	 this.props.chooseAll(this.refs.all.checked)
  }
  
  componentDidMount (){
	  this.refs.all.checked = this.props.isChooseAll 
  }
  
  componentDidUpdate(){
	  this.refs.all.checked = this.props.isChooseAll
  }

  render() {
    return (
		<div>
		   <label>
		     <input type="checkbox" ref="all" onClick={this.handleChooseAll} className="l db"/>
		     全选
		   </label>
		   <input type="text" ref="text" placeholder="输入需要添加的文字" onKeyDown={this.keyDownSubmit}/>
		   <button onClick={this.handleSubmit}>添加</button>
		</div>
    )
  }
}
