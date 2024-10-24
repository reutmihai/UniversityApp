import { useState, useEffect } from 'react'
import { Icon } from '../Common/Icon/Icon';
import AddCities from '../AddCities/AddCities';
import styles from '../Cities/Cities.module.css';

const Cities = () => {
  const [isAddCityVisible, setIsAddCityVisible] = useState(false);
  const [cities, setCities] = useState([]);

  const renderCities = cities => {
    if (!cities || cities.length === 0) {
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

  const handleAddCity = city => {
    const newId = Date.now();
    const addNewCity = {
      name: city.name,
      id: newId,
    };

    setCities((prevState) => {
      return [...prevState, addNewCity];
    });
    setIsAddCityVisible(false);

  };

    return (
      <section className={styles['cities-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pin" label="pin" />
          <h1>Cities</h1>
        </div>
        <div className={styles['cities-list']}>{renderCities(cities)}</div>
        {isAddCityVisible && <AddCities onCitiesSubmit={handleAddCity} />}
        <button onClick={() => setIsAddCityVisible(true)}>
          ADD CITY
        </button>
      </section>
    );
}

export default Cities;