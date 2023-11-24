import Movie from '../Components/Movie/Movie'
import Detail from '../Components/Detail.jsx'
import { useEffect, useState } from 'react';
import {movies} from '../movieDummy'
import axios from 'axios';


function Movies() {
  let [movie, setMovies] = useState([])
  let [page, setPage] = useState(1)

  const api = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`
  const token = process.env.REACT_APP_TOKEN
  const prevPage=(() => {setPage(page-1)})
  const nextPage=(() => {setPage(page+1)})

  const fetchData = async() => {
      try {
        const res = await axios.get(api, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
            
          }
        })
        setMovies(res.data.results)
        window.scrollTo(0, 0);
      }
      catch(error){
        console.log(error)
      }
  }
  useEffect(() => {
    fetchData()
  }, [page])
  
  return (
    <div className="App">
      <div className="app-container">
        {
          movie.map((item, index) => {
            return (
              <div key={index} className='flex-item'>
                <Movie item={item} movie={movie} setMovies={setMovies} />
                {/* <Detail item={item} index={index} /> */}
              </div>
            )
          })
        }
      </div>
      <div className='pagination'>
        <button className='prev_btn' onClick={prevPage}
         style={{ opacity: page !== 1 ? 1 : 0, pointerEvents: page !== 1 ? 'auto' : 'none' }}>이전</button>
        <p className='page_num'>{page}페이지</p>
        <button className='next_btn' onClick={nextPage}>다음</button>      
      </div>
    </div>
  );
}


export default Movies