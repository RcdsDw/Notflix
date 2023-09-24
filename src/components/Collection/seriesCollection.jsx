import React, { useState, useEffect } from 'react';
import { SeriesGet } from '../../service/series';
import SerieCard from '../Cards/serie'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function SeriesCollection() {
    const [error, setError] = useState("")
    const [series, setSeries] = useState("")

    async function FetchSeries() {
        let data = await SeriesGet()
        setError("")

        setSeries(data['hydra:member'])
    }

    useEffect(() => {
        FetchSeries()
    }, [])
    
    console.log(series)

    return (
        <Grid container spacing={2}>
            <Typography xs={12} marginTop={12} marginLeft={2} position='absolute'>SERIES</Typography>
            {series && series.map((serie, index) => (
                <Grid xs={2} key={index} margin={2} position='relative' top={105}>
                    <SerieCard 
                        title={serie.name} 
                        restriction={serie.age_restriction} 
                        description={serie.description} 
                        categorys={serie.category}
                        publicated_date={serie.publication_date}
                        url={serie.slug}
                        img={serie.image}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default SeriesCollection
