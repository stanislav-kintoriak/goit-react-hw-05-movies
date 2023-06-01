import { Details, Container } from './MovieDetails.styled';
// import PropTypes from 'prop-types';

const MovieDetails = ({
    movie: {
      title,
      titleOriginal,
      popularity,
      vote,
      votes,
      w500imgUrl,
      genres,
      about,
    }


  }) => {
    return (
      <Container w500imgUrl={w500imgUrl}>
        <Details>
          <h1>{title}</h1>
          <h2>Original Title: {titleOriginal}</h2>
  
          <ul>
            <li>
              <h3> Votes</h3>
              <p>
                <span>{vote}</span>/<span>{votes}</span>
              </p>
            </li>
            <li>
              <h3>Popularity</h3>
              <p>{popularity}</p>
            </li>
            <li>
              <h3>Genre</h3>
              <p>{genres}</p>
            </li>
          </ul>
          <p>About</p>
          <p>{about}</p>
        </Details>
      </Container>
    );
  };
  
  // MovieInfo.propTypes = {
  //   movie: PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     titleOriginal: PropTypes.string.isRequired,
  //     popularity: PropTypes.number.isRequired,
  //     vote: PropTypes.number.isRequired,
  //     votes: PropTypes.number.isRequired,
  //     w500imgUrl: PropTypes.string.isRequired,
  //     genres: PropTypes.string.isRequired,
  //     about: PropTypes.string.isRequired,
  //   }).isRequired,
  // };
  
  export default MovieDetails;