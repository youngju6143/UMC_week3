import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';

export default function LoginControl() {
    // let [isLoggedin, setIsLoggedin] = useState(true);
    const navigate = useNavigate()

    let userName = useSelector((state) => state.info.userName);

      return (
        <div>
            {userName == '' ? 
                (<div style={{display:"flex"}}>
                    <button className='loginControl_button' 
                    onClick={() => {
                        // setIsLoggedin(false)
                        navigate('/login')}}>
                        로그인
                    </button>
                    <p className='loginControl_text'>로그인 해주세요!</p>
                </div>)
                :
                (<div  style={{display:"flex"}}>
                    <button className='loginControl_button'
                     onClick={() => {
                        navigate('/')
                        }}>
                        {userName}님
                    </button>
                    <p className='loginControl_text'>환영합니다!</p>
                </div>)
            }
        </div>
      )
}
