import React from 'react'
import { connect } from 'react-redux'
import { buyPie } from '../redux'

const PieContainer = (props) => {
	return (
		<div>
			<h2>Number of pies - {props.numOfPies}</h2>
			<button onClick={props.buyPie}>Buy Pie</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		numOfPies: state.pie.numOfPies
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyPie: () => dispatch(buyPie())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PieContainer)
