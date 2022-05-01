import React from 'react'
import './display.css';
const Display = () => {
  return (
    <div className='display_container'>
            <div className='portfolio_content_column'>
            <div className='portfolio_content_list'><PortfolioCard/></div>
            <div className='portfolio_content_list'><PortfolioCard/></div>
            <div className='portfolio_content_list'><PortfolioCard/></div>
            {/* <div class="arrow-left"></div> */}
            </div>
            <div className='portfolio_content'>
        <h1>Projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed quam est, dignissim consectetur tristique et, pellentesque convallis leo. 
          Etiam erat turpis, efficitur eu augue quis, vestibulum faucibus metus. 
          Nunc et sem eu nisl suscipit lobortis lacinia at quam.</p>
        </div>
    </div>
  )
}

const PortfolioCard = () => {
    return (
        <div className='portfoliocard_heading'> <h1>Portfolio</h1></div>
    )
}

export default Display