import React, { Component } from 'react';
import styles from '../AddCities/AddCities.module.css';

export default class AddCities extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCitiesSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    return (
        <form className={styles['cities-form']} onSubmit={this.handleSubmit}>
          <h2 className={styles['city-title']}>Adding a city</h2>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="City"
              onChange={this.handleChange}
              required
            />
          <button type="submit" disabled={!name}>ADD</button>
        </form>
    );
  }
}
