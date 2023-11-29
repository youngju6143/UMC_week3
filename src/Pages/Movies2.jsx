import Movie from '../Components/Movie/Movie.jsx'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {useInView} from 'react-intersection-observer'


function Movies2() {
  let [movie, setMovies] = useState([])
  let [page, setPage] = useState(1)
  const [loaderRef, inView] = useInView()
  const prevInView = useRef(false)
  const [loading, setLoading] = useState(false)

  const api = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
  const token = process.env.REACT_APP_TOKEN


  const fetchData = async() => {
    setLoading(true)
      try {
        const res = await axios.get(api, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        setMovies((prevMovies) => [...prevMovies, ...res.data.results]); 
      }
      catch(error){
        console.log(error)
      } finally {
        setLoading(false)
      }
  }
  useEffect(() => {
    fetchData()
  }, [page])
  
  useEffect(() => {
    if (prevInView.current !== inView && inView) {
      setPage((prevPage) => prevPage+1)
      console.log(inView, '무한 스크롤 요청')
    }
    prevInView.current = inView
  }, [inView])

  return (
    <div className="App">
      <div className="app-container">
        {
          movie.map((item, index) => {
            return (
              <div key={index} className='flex-item'>
                <Movie item={item} movie={movie} setMovies={setMovies} />
              </div>
            )
          })
        }
      </div>
      {loading && <div style={{ textAlign: 'center', margin: '20px 0' }}>로딩 중...</div>}
      <div ref={loaderRef} style={{ height: '10px' }}></div>
    </div>
  );
}


export default Movies2