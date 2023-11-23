import styled from "styled-components";
import {StyledBox, StyledText} from './Movie/Movie.style'
import { useNavigate } from 'react-router-dom';

function TVProgram(props) {
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      <div>
        <StyledBox id='box'>
          <Func item={props.item}></Func>
          <StyledText>
            <p>{props.item.name}</p>
            <p>{props.item.vote_average}</p>
          </StyledText>
        </StyledBox>
      </div>
    )
  }
  
  export default TVProgram

  function Func(props) {
    const navigate = useNavigate();
  
    const onClickImg = () => {
      navigate(`/movie/${props.item.name}`, {
        state : {
          name : props.item.name,
          poster_path : props.item.poster_path,
          vote_average : props.item.vote_average
        }
      })
    };
    const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
      
      <img src={PosterUrl} onClick={onClickImg} />
    );
  }
  