import React, { useEffect } from 'react'
import Ad from '../Components/Ad'
import {BeatLoader} from 'react-spinners'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setId, setName, setToken } from '../store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Redirect() {
    const code = new URL(window.location.href).searchParams.get("code");
    const api = `http://localhost:8000/kakao?code=${code}`

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let userName = useSelector((state) => state.info.userName);

    const fetchKakaoData = async() => {
        try {
            const res = await axios.post(api) 
            console.log(res.data)
            dispatch(setToken(res.data.result.token))
            dispatch(setId(res.data.result.email))
            dispatch(setName(res.data.result.name))
            navigate('/')
          }
          catch(error){
            console.log(error)
          } 
    }

    useEffect(() => {
        fetchKakaoData()
    }, [])
  return (
    <div>
         <BeatLoader animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </BeatLoader>
        <h2> 로그인 중입니다...</h2>
    </div>
  )
}
