import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchMoviesSearch } from 'api/fetch';
import SearchList from 'components/Search/SearchLists';
import { FormField, Lable } from './Movies.styled';
import { WrapHomeStyle } from 'page/Home/Home.styled';

function Movies() {
  const [inputChange, setInputChange] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const productName = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInputChange(productName);

    if (productName === '') return;
    fetchMoviesSearch(searchParams.get('query')).then(data => {
      setSearchMovies(data.results);
    });
  }, [productName, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputChange.trim() !== '') {
      setSearchParams({ query: inputChange.trim() });
    }

    e.target.reset();
  }
  return (
    <WrapHomeStyle>
      <FormField onSubmit={handleSubmit}>
        <Lable>
          Enter a search name
          <input
            value={inputChange}
            onChange={e => {
              setInputChange(e.target.value);
            }}
          ></input>
        </Lable>
        <button type="submit">Search</button>
      </FormField>
      <SearchList searchMovies={searchMovies} />
    </WrapHomeStyle>
  );
}

export default Movies;
