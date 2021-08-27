import StarRatings from './StarRatings'
import { useState, useEffect } from 'react'

const MovieCard = ({ movie }) => {

    const [trailerKey, setTrailerKey] = useState('')

    useEffect(() => {
        const getTrailerKey = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=20524a86abdb03dbfe17bac228a9f951&language=en-US`
            const res = await fetch(url)
            const data = await res.json()
            if (data.results.length > 0) {
                console.log(data.results)
                setTrailerKey(data.results[0].key)
            }
        }
        getTrailerKey();
    }, [movie.id])

    return (
        <div className="card"
            style={{
                background: `url(${`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="card--spacer"></div>
            <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <StarRatings rating={movie.vote_average} key={movie.id} />
            </div>
            {trailerKey !== '' &&
                <div className="card--trailer">
                    <a href={`https://www.youtube.com/watch?v=${trailerKey}`} className="trailer-button">View Trailer</a>
                </div>
            }
        </div>
    )
}

export default MovieCard