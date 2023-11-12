import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const email = 'youngju6143@khu.ac.kr'
    const password = '12345678'

    let [showAlert, setShowAlert] = useState(false)
    let [emailValid, setEmailValid] = useState(false)
    let [pwValid, setPwValid] = useState(false)
    
    const isButtonDisabled = emailValid && pwValid;

    const navigate = useNavigate()

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
                    if (e.target.value == password) 
                        setPwValid(true)                   
                }}></input>
            </div>
        </div> 
        <div className='login_container'>
            <button className='login_button' disabled={!isButtonDisabled}
            style={{backgroundColor: (isButtonDisabled ? 'rgb(33, 46, 74)' : 'rgb(182, 182, 182)')}}
            onClick={() => {navigate('/')}}> 확인 </button>
        </div> 
    </div>
  )
}
