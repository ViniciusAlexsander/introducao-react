import React from 'react';
import PropTypes from 'prop-types';

function TeachItem({tech, onDelete}) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TeachItem.defaultProps = {
  tech: 'Não sei',
}

TeachItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TeachItem;