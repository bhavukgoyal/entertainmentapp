import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    console.log(location.state.state); // Log the entire state object to check the structure and content

    const movieData = location.state.state ? location.state.state : null;

    if (!movieData) {
        return <div>No movie data available</div>;
    }

    console.log("Movie Data:", movieData); // Log the movieData object

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', maxWidth: '800px', margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt={movieData.title} style={{ width: '100%', objectFit: 'cover' }} />

            <div style={{ padding: '20px', textAlign: 'left' }}>
                <h2 style={{ marginBottom: '10px', fontSize: '24px' }}>{movieData.title}</h2>
                <p><strong>Release Date:</strong> {movieData.release_date}</p>
                <p><strong>Original Title:</strong> {movieData.original_title}</p>
                <p><strong>Overview:</strong> {movieData.overview}</p>
                <p><strong>Popularity:</strong> {movieData.popularity}</p>
                <p><strong>Vote Average:</strong> {movieData.vote_average}</p>
                <p><strong>Vote Count:</strong> {movieData.vote_count}</p>
            </div>
        </div>
    );
};

export default Details;