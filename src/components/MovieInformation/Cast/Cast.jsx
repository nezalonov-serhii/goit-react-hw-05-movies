import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCast } from 'api/fetch';
import Loader from 'components/Loader/Loader';
import { List } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);

  const idMovies = useParams();

  useEffect(() => {
    fetchMoviesCast(idMovies.id).then(fetchCast => setCast(fetchCast.cast));
  }, [idMovies.id]);

  const notPhoto =
    'https://img.freepik.com/free-vector/gradient-no-photo-sign_23-2149303329.jpg?w=360&t=st=1680343347~exp=1680343947~hmac=e3b45bd6a14b3ef4835e091dc840f4fc014289fc099d2925002133cd70124507';

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <List>
          {cast.map(person => {
            return (
              <li key={person.id}>
                <img
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                      : notPhoto
                  }
                  alt={`${person.name}`}
                />
                <div>
                  <p>{person.name}</p>
                  <p>Character: {person.character}</p>
                </div>
              </li>
            );
          })}
        </List>
      </div>
    </Suspense>
  );
}

export default Cast;
