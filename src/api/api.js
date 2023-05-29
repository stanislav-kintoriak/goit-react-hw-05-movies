import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '592c5fa13d6af61a1d8c8304650d9e60'

const DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'



// Функція, що дістає список популярних фільмів
export const getPopularMovies = async pageNumber  => {

const data = await axios (
    `${API_URL}/trending/movie/day?api_key=${API_KEY}&page=${
      pageNumber ? pageNumber : 1
    }`
  );


  return data;
}


// Функція, яка запитує дані з Api за пошуковим запитом


export const getMoviesByQuery = async (query,pageNumber) => {
    const data = await axios(
        `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${
          pageNumber ? pageNumber : 1
        }`
      );


    return data;
}