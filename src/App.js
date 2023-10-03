import Movie from './Components/Movie.jsx'
import {movies} from './movieDummy.js'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            const PosterUrl = `https://image.tmdb.org/t/p/w1280/${item.poster_path}`;
            return (
              <div className='box'>
                <img src = {PosterUrl} alt="ㄹ"></img>
                <div className='text'>
                  <p>{item.title}</p>
                  <p>{item.vote_average}</p>
                </div>
              </div>
            )
          })
        }
         {/* <div>{movies.dates.maximum}</div>
         <div>{movies.results[0].id}</div> */}
      </div>
    </div>
  );
}

export default App;

// 포스터 사진, 제목, 별ㅓ