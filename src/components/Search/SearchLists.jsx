import { Link, useLocation } from 'react-router-dom';

function SearchList({ searchMovies }) {
  const notPhoto =
    'https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149303329.jpg?w=360&t=st=1680343347~exp=1680343947~hmac=e3b45bd6a14b3ef4835e091dc840f4fc014289fc099d2925002133cd70124507';

  const location = useLocation();

  return (
    <ul>
      {searchMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : notPhoto
                }
                alt={movie.title}
                height={'446px'}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;
