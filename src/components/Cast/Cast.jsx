import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo, getActorInfoData } from '../../api/api';
import Loader from 'components/Loader/Loader';
import CastItem from './CastItem/CastItem'




const Cast = () => {
  const { movieId } = useParams();
const [castInfo,setCastInfo] = useState([]);
const [isLoading, setIsLoading] = useState(false);



useEffect(() => {
  setIsLoading(true);

  getCastInfo(movieId)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }
      setCastInfo(getActorInfoData(response.data.cast));
    })
    .catch(e => console.error(e))
    .finally(() => setIsLoading(false));
}, [movieId]);

  return (
    <>
     <div>
      {isLoading && <Loader />}
      {castInfo.length ? (
castInfo.map(actor => <CastItem key={actor.id} actor={actor} />)

      ) : (
        <h3>There is no info here...</h3>
      )}
    </div>
    </>
  );
};

export default Cast;
