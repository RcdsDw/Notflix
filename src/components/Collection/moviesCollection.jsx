import React, { useState, useEffect } from 'react';
import { MoviesGet } from '../../service/movies';
import MovieCard from '../Cards/movie'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function MoviesCollection() {
    const [error, setError] = useState("")
    const [movies, setMovies] = useState("")

    async function FetchMovies() {
        let data = await MoviesGet()
        setError("")

        setMovies(data['hydra:member'])
    }

    useEffect(() => {
        FetchMovies()
    }, [])

    return (
        <Grid container spacing={2}>
            <Typography xs={12} marginTop={10} marginLeft={2} position='absolute'>FILMS</Typography>
            {movies && movies.map((movie, index) => (
                <Grid 
                    xs={4} 
                    md={4} 
                    lg={3} 
                    xl={2} 
                    key={index} 
                    margin={2} 
                    position='relative' 
                    top={100} 
                    style={{ 
                        transition: 'transform 0.3s',
                    }} 
                    className="movie-grid"
                >
                    <MovieCard 
                        title={movie.name} 
                        restriction={movie.age_restriction} 
                        description={movie.description} 
                        categorys={movie.category}
                        publicated_date={movie.publication_date}
                        url={movie.slug}
                        img={movie.image}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default MoviesCollection