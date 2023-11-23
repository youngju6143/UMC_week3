import React from 'react'
import { Link } from 'react-router-dom'
import LoginControl from './LoginControl'

export default function Header() {

  return (
    <div className='header'>
        <Link to='/'>
            <img
                style={{ width: "154px", height: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="로고"
            />
        </Link>
        <ul className='header_ul'>
            <li><Link className='header_text' to="/movie"><p style={{color:"white"}}>영화</p></Link></li>
            <li><Link className='header_text' to="/tv"><p style={{color:"white"}}>TV 프로그램</p></Link></li>
            <li><Link className='header_text' to="/person"><p style={{color:"white"}}>인물</p></Link></li>
        </ul>
        <LoginControl/>
    </div>
  )
}
