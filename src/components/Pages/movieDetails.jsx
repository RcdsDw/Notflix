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
import Image from '../../assets/images/movies/avatar.png'
import { useNavigate } from "react-router-dom";

export default function MovieDetail({title, restriction, description, categorys, publicated_date, url}) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/details/${url}`)
    }

    return (
        <StyledCard sx={{ minWidth: 275, maxWidth: 310, height: 530}} onClick={handleClick}>
            <CardMedia
                component="img"
                height="194"
                image={Image}
                alt={title}
                style={{
                    objectFit: 'cover'
                }}
            />
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
            </CardContent>
            <CardActions disableSpacing >
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </StyledCard>
  );
}