import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const StyledCard = styled(Card)`
    position: relative;
    background: linear-gradient(to top, rgba(45,45,45), rgba(25,25,25), rgba(0,0,0));
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.15);
        position: absolute;
        z-index: 2
      }
`;

const StyledIconButton = styled(IconButton)`
    transition: transform 0.7s ease;
    &:hover {
        transform: scale(1.1);
        color: #FF0000AB;
    }
`;

export default function MovieCard({title, restriction, description, categorys, publicated_date, url, img}) {

    const [cardHover, setCardHover] = useState(false)
    const [modal, setModal] = useState(false)

    const navigate = useNavigate();

    function handleClick() {
        setModal(true);
        /* navigate(`/details/${url}`) */
    }

    return (
        <StyledCard 
            sx={{ 
                minWidth: 275, 
                maxWidth: 310, 
                maxHeight: 530}} 
            onMouseOver={() => {
                setCardHover(true);
            }}
            onMouseOut={() => {
                setCardHover(false);
            }}
            >
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt={title}
                
            />
            {cardHover &&
            <CardContent>
                <CardActions 
                    disableSpacing 
                    style={{
                        position: 'relative',
                        top: '-15px',
                        left: '-15px',
                    }}
                >
                    <StyledIconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </StyledIconButton>
                    <StyledIconButton aria-label="share">
                        <ShareIcon />
                    </StyledIconButton>
                    <IconButton 
                        aria-label="add to favorites"
                        /* onClick={handleClick} */
                        style={{
                            position: 'absolute',
                            right: '0px'
                        }}
                    >
                        <ArrowCircleDownRoundedIcon/>
                    </IconButton>
                </CardActions>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography 
                    variant="body2"
                    style={{
                        width: 'max-content',
                        border:'solid 1px',
                        padding: '0px 2px',
                    }}
                >
                    {restriction}+
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {categorys}
                </Typography>
            </CardContent>
            }
            {modal &&
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
            }
        </StyledCard>
  );
}