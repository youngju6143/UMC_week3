import React from 'react'
import Ad from '../Components/Ad'
import axios from 'axios'

export default function Home() {
  function saveLocalStorage(token, id) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
}
  const fetchData = async () => {
    try {
      const endpoint = 'http://localhost:8000/user/payload';
      let receivedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVtY3dlYiIsInVzZXJuYW1lIjoiVU1DIOybuSDtjIzsnbTtjIUiLCJpYXQiOjE3MDA4MTQxNzgsImV4cCI6MTcwMDgxNTA3OCwiaXNzIjoiVU1DIFdlYiBXQiJ9.ix7xTUBzJn5ZtfbZKNl7UbSIRKoJqIyPVMYgmstFHmw"
      // axios를 사용하여 GET 요청 보내기
      const response = await axios.get(endpoint, {

        headers: {
          'Authorization': receivedToken
        },
      });
      let receivedId = response.data.result.id;
      saveLocalStorage(receivedToken, receivedId);
      // 응답 데이터 확인
      console.log(response.data);
    } catch (error) {
      // 오류 처리
      console.error('Error during GET request:', error);
    }
  };
  return (
    <div>
      <Ad></Ad>
      <button onClick={fetchData}>토큰 인증</button>
    </div>
  )

}
