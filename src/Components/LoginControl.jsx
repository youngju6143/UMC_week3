import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
    let [isLoggedin, setIsLoggedin] = useState(true);
    const navigate = useNavigate()

      return (
        <div>
            {isLoggedin ? 
                (<div  style={{display:"flex"}}>
                    <button className='loginControl_button' 
                    onClick={() => {
                        setIsLoggedin(false)
                        navigate('/login')}}>
                        로그인
                    </button>
                    <p className='loginControl_text'>로그인 해주세요!</p>
                </div>)
                :
                (<div  style={{display:"flex"}}>
                    <button className='loginControl_button'
                     onClick={() => {
                        setIsLoggedin(true)
                        navigate('/')
                        }}>
                        로그아웃
                    </button>
                    <p className='loginControl_text'>환영합니다!</p>
                </div>)
            }
        </div>
      )
}
