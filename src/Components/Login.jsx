import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {setId, setToken} from '../store'
import { useDispatch } from 'react-redux'


export default function Login(props) {
    // const email = 'youngju6143@khu.ac.kr'
    // const password = '12345678'
    const email = 'umcweb'
    const password = '1234'
    
    let [showAlert, setShowAlert] = useState(false)
    let [emailValid, setEmailValid] = useState(false)
    let [pwValid, setPwValid] = useState(false)
    
    const isButtonDisabled = emailValid && pwValid;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function saveLocalStorage(token, id) {
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
    }

    const fetchData = async () => {
        try {
          const endpoint = 'http://localhost:8000/user/login';
          const requestBody = {
            id: "umcweb",
            pw: "1234"
          };
    
          // axios를 사용하여 POST 요청 보내기
          const response = await axios.post(endpoint, requestBody, {
            headers: {
              'Content-Type': 'application/json', 
            },
          });
          let receivedToken = response.data.result.AccessToken
          let receivedId = response.data.result.userId
          
          dispatch(setToken(receivedToken))
          dispatch(setId(receivedId))

          // 응답 데이터 확인
          saveLocalStorage(receivedToken, receivedId);
        
        } catch (error) {
          // 오류 처리
          console.log('Error during POST request:', error);
        }
      };

    const K_REST_API_KEY = process.env.REACT_APP_REST_API;
    const K_REDIRECT_URI = "http://localhost:3000/oauth"
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
      window.location.href = kakaoURL
    }

  return (
    <div>
        <h1>이메일과 비밀번호를</h1> 
        <h1>입력해주세요</h1>
        <div>
            <p> 이메일 주소 </p>
            <div className='login_container'>
                <input className='login_input' 
                onChange={(e) => {
                    if (e.target.value === email) {
                        setShowAlert(false)
                        setEmailValid(true)
                    }
                    else
                        setShowAlert(true)
                }}></input>
            </div>
            <p> {showAlert ? "올바른 이메일을 입력해주세요." : ''}</p>
        </div> 
        <div>
            <p> 비밀번호 </p>
            <div className='login_container'>
                <input className='login_input'
                type='password'
                placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                onKeyUp={(e) => {
                    if (e.target.value === password) 
                        setPwValid(true)                   
                }}></input>
            </div>
        </div> 
        <div className='login_container'>
            <button className='login_button' disabled={!isButtonDisabled}
            style={{backgroundColor: (isButtonDisabled ? 'rgb(33, 46, 74)' : 'rgb(182, 182, 182)')}}
            onClick={() => {navigate('/')}}> 확인 </button>
            <button onClick={fetchData}>post 요청</button>
        </div> 
          <button className='kakao_button' onClick={handleKakaoLogin}> </button>
    </div>
  )
}
