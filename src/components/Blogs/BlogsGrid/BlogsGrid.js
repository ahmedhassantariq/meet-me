import React from 'react'
import './blogsgrid.css'
import headerlogo from '../../../Assets/SVG/logo.svg';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const BlogsGrid = () => {
  return (
    <div>
      <DivCard/>
    </div>
  )
}


const DivCard = () => {
  return (
   <div className='card_grid'>
      <div className='single_grid'>
        <Singlecard/>
      </div>
      <div className='multiple_grid'>
        <Multicard/>
        <Multicard/>
        <Multicard/>
        <Multicard/>
     </div>
   </div>
  );
  

}




const Singlecard = () => {
    return (
    <div className='single_card'>
      <Card sx={{ maxWidth: 350, maxHeight:600 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="150"
          image={headerlogo}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent maximus sapien a augue sodales accumsan. 
        Ut quis molestie mauris, eu rhoncus libero. 
        Phasellus rhoncus scelerisque orci, vel ultrices lacus maximus vitae. 
        Donec in felis quis ante elementum cursus et et ipsum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      </div>
    );

}


const Multicard = () => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight:300}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={headerlogo}
      />
    </Card>
  );

}
export default BlogsGrid