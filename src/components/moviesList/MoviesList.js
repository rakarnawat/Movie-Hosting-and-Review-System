import './MoviesList.css'
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-material-ui-carousel';
// import { Grid } from "@material-ui/core";
//import {MoviesData} from './MoviesData';

const MoviesList = ({movies}) => {
   
    
    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }
    
return (
    <div className="MoviesListMain">
        <div className="MoviesListHeader">
            <h1>All Movies</h1>
        </div>
        <div className='MoviesContainer'>
        

        <div className='MoviesListMap'>
            {/* {MoviesData.map((moviesi, index) =>
            <div key={moviesi.title + index}>
                <div className="movie-buttons-container">
                    <Link to={`/Trailer/${moviesi.trailerLink.substring(moviesi.trailerLink.length - 11)}`}>
                    <img src={moviesi.poster} alt={`${moviesi.title}`} width="200"/>
                    
                    </Link>
                    
                </div>


                <hr/>
            </div>
            )} */}
         {/* <Grid item sm={12}> */}
        {movies?.map((movie) =>{
            return(
                <Paper key={movie.imdbId} className='MovieListPaper'>
                <div key={movie.title}>
                    <div className="moviesContainerList">
                        <Link to={`/Trailer/${movie.trailerLink?.substring(movie.trailerLink.length - 11)}`}>
                        <img src={movie.poster} alt={`${movie.title}`} width="200"/>
                        </Link>
                    </div>
                </div>
            </Paper>
                )
            })
        }
        {/* </Grid> */}

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