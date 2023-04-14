import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

import { FaPlus } from 'react-icons/fa';

export default function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
