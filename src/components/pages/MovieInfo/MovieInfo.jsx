import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, getMovieDetails} from '../../../api/api';
import { AddContainer, BackButton, Page } from './MovieInfo.styled';
import Loader from '../../Loader/Loader';

const MovieInfo = () => {
    const { movieId } = useParams();
    const [MovieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsloading] = useState(false);
  
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';


    useEffect(() => {
        setIsloading(true);
    
        getMovieById(movieId)
          .then(response => {
            if (response.status !== 200) {
              throw new Error(`Error: ${response.status}`);
            }
            setMovieInfo(getMovieDetails(response.data));
          })
          .catch(e => console.error(e))
          .finally(() => setIsloading(false));
      }, [movieId]);

      return (
        <Page>
          {isLoading && <Loader />}
          <BackButton to={backLinkHref}>Back</BackButton>
    
          {MovieInfo && !isLoading && (
            <>
              <MovieDetails movie={MovieInfo} />
              <AddContainer>
                <h3>Additional information</h3>
                <ul>
                  <li>
                    <Link to="cast" state={{ ...location.state }}>
                      <p>Cast</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews" state={{ ...location.state }}>
                      <p>Reviews</p>
                    </Link>
                  </li>
                </ul>
              </AddContainer>
              <Outlet />
            </>
          )}
          {/* {!MovieInfo && !isLoading && <PlaceholderSerch />} */}
        </Page>
      );
    };





export default MovieInfo;