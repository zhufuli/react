import React,{
	Fragment,
	Component
}from 'react'

import {
	HeaderOne,
	HeaderTwo
}from './components'

export default class App extends Component{
	constructor(props) {
	    super(props);
		this.state={
		 headerOne: 'Hello React'
		}
	}
	render(){
		return (
		<Fragment>
			<HeaderOne>
				{this.state.headerOne}
			</HeaderOne>
			<HeaderTwo></HeaderTwo>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis in ad iure fuga, odio impedit aliquid beatae rem consectetur vel quo cupiditate inventore aut dolores veniam iusto eius veritatis!</p>
		</Fragment>
		)
	}
}


