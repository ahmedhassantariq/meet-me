import React, { useState } from 'react'
import './display.css';
import headerlogo from '../../../Assets/SVG/logo.svg';

const Display = () => {
  const [stater, setStater] = useState(1);
  console.log(stater);
  return (
    <div className='display_container'>
            <div className='portfolio_content_column'>
            <div className='portfolio_content_list' onClick={()=>{setStater(1)}}><PortfolioCard Title='Plane Project'/></div>
            <div className='portfolio_content_list' onClick={()=>{setStater(2)}}><PortfolioCard Title='GPS Tracker'/></div>
            <div className='portfolio_content_list' onClick={()=>{setStater(3)}}><PortfolioCard Title='Web Development' /></div>
            </div>
            
          <div className='portfolio_content'>
          {stater===1 &&(<>
          <img src={headerlogo} alt='portimage'/>

          <a className='portfolio_content_attribute' href="https://www.google.com/" target="_blank" rel='noreferrer'>
          <h1>Planes</h1>
          </a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed quam est, dignissim consectetur tristique et, pellentesque convallis leo. 
                Etiam erat turpis, efficitur eu augue quis, vestibulum faucibus metus. 
            </p>

                </>)}
          {stater===2 &&(<>
          <img src={headerlogo} alt='portimage'/>
          <a className='portfolio_content_attribute' href="https://www.google.com/" target="_blank" rel='noreferrer'>
           <h1>GPS Tracker</h1>
           </a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed quam est, dignissim consectetur tristique et, pellentesque convallis leo. 
                </p>
                

                </>)}
          {stater===3 &&(<>
            <img src={headerlogo} alt='portimage'/>
            <a className='portfolio_content_attribute' href="https://www.google.com/" target="_blank" rel='noreferrer'>
             <h1>Web Development</h1>
             </a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed quam est, dignissim consectetur tristique et, pellentesque convallis leo. 
                Etiam erat turpis, efficitur eu augue quis, vestibulum faucibus metus.
                
                </p>
                
                </>)}








          </div>


    </div>
  )
}

const PortfolioCard = ({Title}) => {
    return (
        <div className='portfoliocard_heading'><h2>{Title}</h2></div>
    )
}

export default Display