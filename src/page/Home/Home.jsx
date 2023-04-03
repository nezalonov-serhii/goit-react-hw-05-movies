import { useEffect, useState } from 'react';

import { fetchTrending } from 'api/fetch';
import HomeList from 'components/HomeList/HomeList';
import { WrapHomeStyle } from './Home.styled';

function Home() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetchTrending().then(trendings => {
      setTrendings(trendings);
    });
  }, []);

  return (
    <WrapHomeStyle>
      <h1>Trending today</h1>
      <ul>{trendings.length > 0 && <HomeList trendings={trendings} />}</ul>
    </WrapHomeStyle>
  );
}

export default Home;
