import './MoviesList.css'
import { Paper } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";


const MoviesList = ({movies}) => {
   
    
    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }
    
return (
    <div className="MoviesListMain">
        <div className="MoviesListHeader">
            <h1>Watch Movies</h1>
        </div>
        <div className='MoviesContainer'>
        

        <div className='MoviesListMap'>
        {movies?.map((movie) =>{
            return(
                <Paper key={movie.imdbId} className='MovieListPaper'>
                <div className='movieMainListdiv' key={movie.title} >
                <Link to={`/Trailer/${movie.trailerLink?.substring(movie.trailerLink.length - 11)}`}>
                    <img src={movie.poster} alt={`${movie.title}`} width="200"/>
                </Link>
                    <button type="button" className='ReviewButtonCSS' onClick={() => reviews(movie.imdbId)} >Reviews</button>
                
                    <Link to={`/Trailer/${movie.trailerLink?.substring(movie.trailerLink.length - 11)}`}>
                        <button className="PlayButtonCSS" >Play</button>
                    </Link>
                    <div className='MovieDetails'>
                        <p>Title: {movie.title} </p>
                        <p>Release Date: {movie.releaseDate} </p>
                        <p>Genre: {movie.genres} </p>
                    </div>
                   
                    
                </div>
            </Paper>
                )
            })
        }

        </div>
        </div>
        <footer className='FooterClass'>
        <hr />
            <h1>Thank You For Visiting!</h1>
        </footer>
    </div>
  )
}

export default MoviesList