import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './AddCities.module.css';

const AddCities = ({ onCitiesSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onCitiesSubmit({ name });
  };

  const handleChange = e => {
    const { value } = e.target;
    setName(value);
  };

    return (
        <form className={styles['cities-form']} onSubmit={handleSubmit}>
          <h2 className={styles['city-title']}>Adding a city</h2>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="City"
              onChange={handleChange}
              required
            />
          <button type="submit" disabled={!name}>ADD</button>
        </form>
    );
}

AddCities.propTypes = {
  onCitiesSubmit: PropTypes.func.isRequired,
};

export default AddCities;