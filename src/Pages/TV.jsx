import {tvs} from '../tvDummy'
import TVProgram from '../Components/TVProgram';

function Movies() {
  return (
    <div className="App">
      <div className="app-container">
        {
          tvs.results.map((item, index) => {
            return (
              <div>
                <TVProgram item={item} />
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