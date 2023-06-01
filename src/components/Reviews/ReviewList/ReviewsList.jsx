import PropTypes from 'prop-types';

import ReviewItem from './ReviewItem/ReviewItem';
import { ReviewsList } from './ReviewsList.styled';

const ReviewsListTotal = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews &&
        reviews.map(review => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </ReviewsList>
  );
};
ReviewsListTotal.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReviewsListTotal;