import React from 'react'
import Display from './Contents/Display';
import './portfolio.css';
const Portfolio = () => {
  return (
    <div className='portfolio_container'>
        <div className='portfolio_titles'>
          <h1 className='portfolio_title_shadow'>PORTFOLIO</h1>
          <h1 className='portfolio_title'>PORTFOLIO</h1>
        </div>
    <Display/>
    
    </div>
  )
}

export default Portfolio