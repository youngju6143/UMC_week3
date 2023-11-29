import React from 'react'
import Ad from '../Components/Ad'
import axios from 'axios'
import { useSelector } from 'react-redux';

export default function Home() {
  //Login.jsx로 옮기기
  let info = useSelector((state) => state.info)
  let receivedToken = info.AccessToken

  const fetchData = async () => {
    try {
      const endpoint = 'http://localhost:8000/user/payload';
      // axios를 사용하여 GET 요청 보내기
      const response = await axios.get(endpoint, {
        headers: {
          'Authorization': receivedToken
        },
      });
            
      // 응답 데이터 확인6
      console.log(response.data);
    } catch (error) {
      // 오류 처리
      console.error('Error during GET request:', error);
    }
  };
  // useEffect(() => {
  //   fetchData()
  // })
  return (
    <div>
      <Ad></Ad>
      <button onClick={fetchData}>토큰 인증</button>
    </div>
  )

}
