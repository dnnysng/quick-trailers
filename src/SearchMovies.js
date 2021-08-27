import React, { useState } from 'react'
import MovieCard from './MovieCard'

const SearchMovies = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const apiKey = '20524a86abdb03dbfe17bac228a9f951'

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`

        try {
            const res = await fetch(url)
            const data = await res.json();
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <form action="" className="form" onSubmit={searchMovies}>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e. Star Wars"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path && true).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}

export default SearchMovies
