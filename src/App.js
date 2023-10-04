import Movie from './Components/Movie.jsx'
import {movies} from './movieDummy.js'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie item={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

// 포스터 사진, 제목, 별ㅓ