import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cards.scss'
const ArticleCard = (props) => {
    
    const article = props.articles
    function getArticle(url) {
        window.open(
            url, "_blank");
    }
  return (
    <div className='card-wrapper'>
        {article.map((data, i) =>
            <Card sx={{ maxWidth: 345, height:450 }} key={i} className='card-main'>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    alt="news image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className='open-card' onClick={() => window.open(data.url, "_blank")}>View</Button>
                </CardActions>
            </Card>
        )}
        
    </div>
  )
}

export default ArticleCard