import React,{Component,Fragment}from 'react';


export default class App extends Component{
	constructor(){
		super();
		this.state = {
			inputValue :'请输入',
			list : [
				'吃饭',
				'睡觉'
			]
		}
		this.handleInputChange = this.handleInputChange.bind(this);

	}
	AppButton = ()=>{
		this.setState({
			list:[...this.state.list,this.state.inputValue]
		})
	}
	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}
	
	render(){
		return(
			<Fragment>
			 <ul>
			 {
				 this.state.list.map((item,index)=>{
					 return <li key={index}>{item}</li>
				 })
			   }
			 </ul>
			 <input
			 type="text"
			 value = {this.state.inputValue}
			 onChange = {this.handleInputChange}
			 />
			 
			 <button onClick={this.AppButton}>添加</button>
			</Fragment>
		)
	}
}