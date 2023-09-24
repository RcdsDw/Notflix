import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const StyledCard = styled(Card)`
    position: relative;
    background: linear-gradient(to top, rgba(45,45,45), rgba(25,25,25), rgba(0,0,0));
    transition: transform 0.7s ease;
    &:hover {
        transform: scale(1.1);
        position: absolute;
        z-index: 2
      }
`;

export default function MovieCard({title, restriction, description, categorys, publicated_date, url, img}) {

    const [cardHover, setCardHover] = useState(false)

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/details/${url}`)
    }

    return (
        <StyledCard sx={{ minWidth: 275, maxWidth: 310, maxHeight: 530}} onClick={handleClick}>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt={title}
                onMouseOver={() => {
                    setCardHover(true);
                }}
                onMouseOut={() => {
                    setCardHover(false);
                }}
                style={{
                    objectFit: 'cover'
                }}
            />
            {cardHover &&
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {categorys}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {publicated_date}
                </Typography>
                <Typography variant="body2">
                    {description}
                    <br />
                    <br />
                    PEGI {restriction}
                </Typography>
                <CardActions disableSpacing >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
            }
        </StyledCard>
  );
}