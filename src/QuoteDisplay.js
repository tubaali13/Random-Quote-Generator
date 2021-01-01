import React from 'react';

const QuoteDisplay = ({handleClick,text,author,color}) => {
	return(
		<div className="container " style={{backgroundColor: color, color: color}}>
		<div className="quote-box">
		  <p className="f3 center">{text}</p>
		  <p className=" tr f5 ma2">{`-${author}`}</p>
		  <div style={{display: 'flex', 'justifyContent': 'flex-end'}}>
		  <a onClick= {handleClick} 
		  className=" grow pointer f4 ma4 pa2 link dim br2 ph3 pv2 mb2 dib white"
		  style={{backgroundColor: color}}>Generate</a>
		  </div>
		 </div>
		</div>
	)
}

export default QuoteDisplay;