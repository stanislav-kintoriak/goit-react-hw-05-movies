import PropTypes from 'prop-types';

const ReviewItem = ({
  review: { author, content },

}) => {
  return (
    <li>
      <div>
        <h4>
          Author:
          {author}
        </h4>
      </div>
      <p>{content}</p>
    </li>
  );
};
ReviewItem.propTypes = {
    review: PropTypes.shape({
      author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;