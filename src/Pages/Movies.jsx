import Movie from '../Components/Movie/Movie'
import Detail from '../Components/Detail.jsx'
// import {movies} from './movieDummy.js'
import {movies} from '../movieDummy'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item, index) => {
            return (
              <div>
                <Movie item={item} />
                <Detail item={item} index={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

// 포스터 사진, 제목, 별ㅓ