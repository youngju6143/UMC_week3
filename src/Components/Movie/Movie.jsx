import {StyledBox, StyledText} from './Movie.style'
import { useNavigate } from 'react-router-dom';

function Movie(props) {
    return (
      <div>
        <StyledBox id='box'>
          <Func item={props.item}></Func>
          <StyledText>
            <p>{props.item.title}</p>
            <p>{props.item.vote_average}</p>
          </StyledText>
        </StyledBox>
      </div>
    )
  }
  
  export default Movie

  function Func(props) {
    const navigate = useNavigate();
  
    const onClickImg = () => {
      navigate(`/movie/${props.item.title}`, {
        state : {
          title : props.item.title,
          poster_path : props.item.poster_path,
          vote_average : props.item.vote_average
        }
      })
    };
    const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      
      <img src={PosterUrl} alt = "." onClick={onClickImg} />
    );
  }
  