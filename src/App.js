import { BrowserRouter, Route, Routes, Link, Router } from "react-router-dom";
import Movies from './Pages/Movies'
import TV from './Pages/TV'
import Celebrity from './Pages/Celebrity'
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/person" element={<Celebrity />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 포스터 사진, 제목, 별ㅓ