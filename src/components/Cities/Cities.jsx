import React, { Component } from 'react';
import { Icon } from '../Common/Icon/Icon';
import AddCities from '../AddCities/AddCities';
import styles from '../Cities/Cities.module.css';

export default class Cities extends Component {
  state = {
    isAddCityVisible: false,
    cities: [
      {
        name: 'Suceava',
        id: Date.now(),
      },
    ],
  };

  renderCities = cities => {
    if (!cities || cities.length === 9) {
      return <div>There are no cities yet</div>;
    }
    return cities.map(city => {
      return (
        <div key={city.id} className={styles['cities-list']}>
          <span className={styles['city-name']}>{city.name}</span>
        </div>
      );
    });
  };

  handleAddCity = city => {
    const newId = Date.now();
    const addNewCity = {
      name: city.name,
      id: newId,
    };

    this.setState(prevState => {
      return {
        cities: [...prevState.cities, addNewCity],
        isAddCityVisible: false,
      };
    });
  };

  render() {
    const { isAddCityVisible, cities } = this.state;
    return (
      <section className={styles['cities-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pin" label="pin" />
          <h1>Cities</h1>
        </div>
        <div className={styles['cities-list']}>{this.renderCities(cities)}</div>
        {isAddCityVisible && <AddCities onCitiesSubmit={this.handleAddCity} />}
        <button onClick={() => this.setState({ isAddCityVisible: true })}>
          ADD CITY
        </button>
      </section>
    );
  }
}
