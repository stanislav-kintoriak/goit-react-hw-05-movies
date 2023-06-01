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

// Функція, яка повертає дані про фільм

export const getMoviesDetails = moviesArr => {
  return moviesArr.map(movie => {
    const movieInfo = {
      title: movie.title ? movie.title : movie.name,
      w300imgUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : DEFAULT_IMAGE,
      w500imgUrl: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : DEFAULT_IMAGE,
      year: movie.release_date
        ? movie.release_date.slice(0, 4)
        : movie?.first_air_date?.slice(0, 4) || '',
      id: movie.id,
    };
    return movieInfo;
  });
};



// Функція, яка повертає дані про фільм отримуючи id
export const getMovieById = async id => {
  const data = await axios(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};


// Функція, яка повертає дані про акторів отримуючи id фільму
export const getCastInfo = async id => {
  const data = await axios(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return data;
};



export const getActorInfoData = actorsArr => {
  return actorsArr.map(actor => {
    const actorInfo = {
      name: actor.name ? actor.name : actor.original_name,
      w300imgUrl: actor.poster_path
        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
        : DEFAULT_IMAGE,
      w500imgUrl: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : DEFAULT_IMAGE,
      character: actor.character,
      id: actor.id,
    };
    return actorInfo;
  });
};


// Функція, яка повертає дані про відгуки отримуючи id фільму

export const getReviews = async id => {
  const data = await axios(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data;
};




export const getReviewsInfo = reviewsArr => {
  return reviewsArr.map(review => {
    const reviewInfo = {
      author: review.author,
      content: review.content,
      id: review.id,
    };
    return reviewInfo;
  });
};


export const getMovieDetails = movie => {
  let genres = movie.genres.map(elem => elem.name);
  let cutGenres;
  if (genres.length === 0) {
    cutGenres = 'Other';
  } else if (genres.length <= 2) {
    cutGenres = genres.join(', ');
  } else {
    cutGenres = `${genres.slice(0, 2).join(', ')}, Other`;
  }
  return {
    title: movie.title ? movie.title : movie.name, //назва
    titleOriginal: movie.original_title, // оригінальна назва
    popularity: movie.popularity, //популярність
    vote: movie.vote_average, // середній рейтинг
    votes: movie.vote_count, // кількість голосів
    w300imgUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : DEFAULT_IMAGE, // постер, або дефолтна картинка за відсутності постера
    w500imgUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : DEFAULT_IMAGE, // постер, або дефолтна картинка за відсутності постера
    genres: cutGenres, // жанри
    about: movie.overview,
    year: movie.release_date
      ? movie.release_date.slice(0, 4)
      : movie?.first_air_date?.slice(0, 4) || '',
  };
};