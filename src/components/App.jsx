import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MoviesItem = lazy(() => import('page/Movies/MoviesItem/MoviesItem'));
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./MovieInformation/Cast/Cast'));
const Reviews = lazy(() => import('./MovieInformation/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesItem />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
};
