import { Link, useLocation } from 'react-router-dom';

function HomeList({ trendings }) {
  const location = useLocation();

  return trendings.map(trending => {
    return (
      <li key={trending.id}>
        <Link to={`movies/${trending.id}`} state={{ from: location }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`}
            alt={trending.title}
          />
          <p>{trending.title}</p>
        </Link>
      </li>
    );
  });
}

export default HomeList;
