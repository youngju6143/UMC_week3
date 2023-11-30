import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from './Pages/Movies'
import Movies2 from './Pages/Movies2'
import TV from './Pages/TV'
import Celebrity from './Pages/Celebrity'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Login";
import Redirect from "./Pages/KakaoRedirect";


function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movies />} />
                <Route path='/movie2' element={<Movies2/>} />
                <Route path="/tv" element={<TV />} />
                <Route path="/person" element={<Celebrity />} />
                <Route path="/movie/:title" element={<MovieDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/oauth" element={<Redirect />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

// 포스터 사진, 제목, 별ㅓ