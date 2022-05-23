import React from 'react'
import BlogsGrid from './BlogsGrid/BlogsGrid';
import './blogs.css';
const Blogs = () => {
  return (
    <div className='blogs_container' id='blogs'>
        <div className='blogs_titles'>
          <h1 className='blogs_title_shadow'>BLOGS</h1>
          <h1 className='blogs_title'>BLOGS</h1>
        </div>
        <BlogsGrid/>
        <div className='blogs_paragraph'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed quam est, dignissim consectetur tristique et, pellentesque convallis leo. 
          Etiam erat turpis, efficitur eu augue quis, vestibulum faucibus metus. 
          Nunc et sem eu nisl suscipit lobortis lacinia at quam. 
          Duis pellentesque elementum erat quis tempor. 
          Nullam dignissim orci a enim ultrices tincidunt. 
          Proin egestas rhoncus mollis. 
          Nullam semper ultricies dolor, quis mollis felis fermentum vestibulum. 
          Nam ultricies pharetra tellus eu lacinia.</p>
        </div>
    </div>
  )
}

export default Blogs