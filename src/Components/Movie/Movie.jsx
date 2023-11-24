import styled from "styled-components";
import {StyledBox, StyledText} from './Movie.style'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

function Movie(props) {
  // const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
  
    // let [page, setPage] = useState(1)
    // const api = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
    // const fetchData = async() => {
    //     try {
    //       const res = await axios.get(api, {
    //         headers: {
    //           accept: 'application/json',
    //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWMyODNjZmMwOTE2NTAyN2E3N2ZiNDU2N2I1ZmY0NSIsInN1YiI6IjY1NWY2ZDc4MjQ0MTgyMDBlYmUzNTQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g8fnzRAwYoow3HXu8MXqIqCa3CwFLch3RsuLpizzubE'
    //         }
    //       })
    //       props.setMovies(res.data.results)
    //       // console.log(data.results)
    //     }
    //     catch(error){
    //       console.log(error)
    //     }
    // }
    // useEffect(() => {
    //   fetchData()
    // }, [])
            //API 키 : 9ec283cfc09165027a77fb4567b5ff45
        // API 읽기 액세스 토큰 : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWMyODNjZmMwOTE2NTAyN2E3N2ZiNDU2N2I1ZmY0NSIsInN1YiI6IjY1NWY2ZDc4MjQ0MTgyMDBlYmUzNTQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g8fnzRAwYoow3HXu8MXqIqCa3CwFLch3RsuLpizzubE

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
      
      <img src={PosterUrl} onClick={onClickImg} />
    );
  }
  