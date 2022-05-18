import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import './styles.scss';

function MovieList(props) {
    const movieArrayComponents = props.movieArray.map(item => {
        return <MovieItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            year={item.year}
            removeMovie={props.removeMovie}
        />
    });
    return (
        <div className='movie-list'>
            {movieArrayComponents}
        </div>
    )
}

export default MovieList;