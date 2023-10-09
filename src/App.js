import './css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MoviePlayer from './pages/MoviePlayer';
import NoPage from './pages/NoPage';
import MoviesListPage from './pages/MoviesListPage';
function App() {
  const imageUrl = `${process.env.PUBLIC_URL}/img/banner-img.jpeg`;
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="movies-list" element={<MoviesListPage />} />
          <Route path="movie-player/:videoId" element={<MoviePlayer />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
