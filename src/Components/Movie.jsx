import {movies} from '../movieDummy.js'

function Movie(props) {
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      <div className='box'>
        <img src = {PosterUrl}></img>
        <div className='text'>
          <p>{props.item.title}</p>
          <p>{props.item.vote_average}</p>
        </div>
      </div>
    )
  }
  
  export default Movie