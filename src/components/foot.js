import React, { PropTypes,Component } from 'react'

const filter_name = {
	show_all: "全部",
	show_unChosen: "未选",
	show_Chosen: "已选"
}

export default class Footer extends Component {
  static propTypes = {
     todos:PropTypes.array.isRequired,
	 delChosen :PropTypes.func.isRequired,
	 onShow:PropTypes.func.isRequired,
	 filter:PropTypes.string.isRequired 
  }
   
  isChooseAll () { //是否有选择的
	 let tds = this.props.todos,
		 re = 0;
	 for(var i = 0;i<tds.length;i++){
		 if (tds[i].chosen && this.props.filter !=="show_unChosen") re = 1;
	 }
	 return re
  }
  
  delChosen = () =>{
	  this.props.delChosen()
  }
  
  unChosen = () =>{
	  let n = 0
	  this.props.todos.map(function(todo){
		  if(!todo.chosen) n++;
		  return todo;
	  })
	  return n;
  }
  
  renderFilterBtn =(v)=>{
	  let f = this.props.filter,
		  title = filter_name[v];
	  return <span className={f===v?"active":""} key={v} onClick={()=>this.props.onShow(v)}>{title}</span>
  }

  render() { 
    return (
      <div className="last_info">
		<p className="l info">{this.unChosen()}项未选择</p>
		<p className="l choose_btn">
			{["show_all","show_unChosen","show_Chosen"].map((v)=>{
			    return this.renderFilterBtn(v)
			})}
		</p>
		<button className="del r" onClick={this.delChosen} style={{
			display: this.isChooseAll()?"inline-block":"none"					   
		}}>删除选中项</button>
	 </div>
    )
  }
}
