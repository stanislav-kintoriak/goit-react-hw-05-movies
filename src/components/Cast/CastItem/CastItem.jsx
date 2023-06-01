import PropTypes from 'prop-types';
import { CastItemCard } from './CastItem.styled';

const CastItem = ({
    actor: { name, w300imgUrl, w500imgUrl, character },
  }) => {
    return (
      <CastItemCard>
        <img
          srcSet={`${w300imgUrl} 300w, ${w500imgUrl} 500w`}
          sizes={'(max-width: 767px) 300px, (min-width: 768px) 500px'}
          src={w500imgUrl}
          alt={name}
          loading="lazy"
        />
        <div>
          <h4> {name}</h4>
          <p>{character}</p>
        </div>
      </CastItemCard>
    );
  };
  CastItem.propTypes = {
    actor: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      w300imgUrl: PropTypes.string.isRequired,
      w500imgUrl: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default CastItem;