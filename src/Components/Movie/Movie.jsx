import styled from "styled-components";
import {StyledBox, StyledText} from './Movie.style'

function Movie(props) {
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      <div>
        <StyledBox id='box'>
          <img src = {PosterUrl}></img>
          <StyledText>
            <p>{props.item.title}</p>
            <p>{props.item.vote_average}</p>
          </StyledText>
        </StyledBox>
      </div>
    )
  }
  
  export default Movie

