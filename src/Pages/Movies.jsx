import Movie from '../Components/Movie/Movie'
import Detail from '../Components/Detail.jsx'
import {movies} from '../movieDummy'

function Movies() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item, index) => {
            return (
              <div>
                <Movie item={item} />
                {/* <Detail item={item} index={index} /> */}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}


export default Movies