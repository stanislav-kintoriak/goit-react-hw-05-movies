import { LoadMoreButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <LoadMoreButton type="button" onClick={onLoadMore}>
      Load more
    </LoadMoreButton>
  );
};

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
