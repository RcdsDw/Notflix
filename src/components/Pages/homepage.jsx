import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MoviesCollection from '../Collection/moviesCollection';
import SeriesCollection from '../Collection/seriesCollection';

function Homepage() {

    return (
        <div>
            <MoviesCollection></MoviesCollection>
            <SeriesCollection></SeriesCollection>
        </div>
    )
    }

export default Homepage