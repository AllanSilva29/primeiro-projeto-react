import PropTypes from 'prop-types';

function Item({ piada, autor }) {
  return (
    <>
      <li>
        {piada} - "{autor}"
      </li>
    </>
  );
}

Item.propTypes = {
  piada: PropTypes.string.isRequired,
};

Item.defaultProps = {
  autor: 'Anônimo',
};

export default Item;
