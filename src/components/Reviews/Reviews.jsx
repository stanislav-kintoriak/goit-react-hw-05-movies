import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h3>Author: {movieId}</h3>
      <p>Text</p>
    </div>
  );
};

export default Reviews;
