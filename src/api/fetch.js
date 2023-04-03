import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '?api_key=580200ac2465c1a00d73bce480af4cbc';

export async function fetchTrending() {
  const trending = await axios.get(`${BASE_URL}/trending/movie/day${API_KEY}`);

  if (trending.status === 200) {
    return trending.data.results;
  }
}

export async function fetchMoviesId(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMovieReviews(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}/reviews${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMoviesCast(id) {
  const trending = await axios.get(`${BASE_URL}/movie/${id}/credits${API_KEY}`);

  if (trending.status === 200) {
    return trending.data;
  }
}

export async function fetchMoviesSearch(query) {
  const trending = await axios.get(
    `${BASE_URL}/search/movie${API_KEY}&query=${query}`
  );

  if (trending.status === 200) {
    return trending.data;
  }
}
