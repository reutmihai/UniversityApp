import React, { Component } from 'react';
import { Icon } from '../../components/Common/Icon/Icon';
import styles from '../Faculties/Faculties.module.css';
import AddFaculty from '../AddFaculty/AddFaculty';


export default class Faculties extends Component {
  state = {
    isAddFacultyVisible: false,
    faculties: [
      {
        name: 'USV',
        id: Date.now(),
      },
    ],
  };

  renderFaculties = faculties => {
    if(!faculties || faculties.length === 0) {
      return <div>There are no faculties yet</div>;
    }

    return faculties.map(faculty => {
      return (
        <div key={faculty.id} className=''>
          <span className=''>{faculty.name}</span>
        </div>
      );
    });
  };

  handleAddFaculty = faculty => {
    const newId = Date.now();
    const addNewFaculty = {
      name: faculty.name,
      id: newId,
    };

    this.setState(prevState => {
      return {
        faculties: [...prevState.faculties, addNewFaculty],
        isAddFacultyVisible: false,
      };
    });
  };

  render() {
    const {isAddFacultyVisible, faculties } = this.state;
    return (
      <section className={styles['faculties-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pencil" label="pencil" />
          <h1>Faculties</h1>
        </div>
        <div className=''>{this.renderFaculties(faculties)}</div>
        {isAddFacultyVisible && <AddFaculty onAddFaculty={this.handleAddFaculty} />}
        <button onClick={() => this.setState({ isAddFacultyVisible: true })}>
        ADD faculty
        </button>
      </section>
    );
  }
}
