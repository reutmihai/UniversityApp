import React, { Component } from 'react';
import { Icon } from '../../components/Common/Icon/Icon';
import styles from '../Faculties/Faculties.module.css';

export default class Faculties extends Component {
  render() {
    return (
      <section className={styles['faculties-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pencil" label="pencil" />
          <h1>Faculties</h1>
        </div>
      </section>
    );
  }
}
