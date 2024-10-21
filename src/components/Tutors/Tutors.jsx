import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Tutors.module.css';
import AddTutor from '../AddTutor/AddTutor';
import { Icon } from "../Common/Icon/Icon";
const TUTORS_KEY = 'tutors';

class Tutors extends Component {
  componentDidMount() {
    const data = localStorage.getItem(TUTORS_KEY);
    try {
      if(data) {
        this.setState({
          list: JSON.parse(data),
        })
      }
    } catch( error ) {
      console.log(error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState?.list.length !== this.state.list.length)
      localStorage.setItem(TUTORS_KEY, JSON.stringify(this.state.list))
  }

  componentWillUnmount() {
    console.log('Tutors Unmounting...');
  }

  state = {
    isAddFormVisible: false,
    list: [
      {
        id: 0,
        firstName: 'Antonio',
        lastName: 'García',
        phone: '+34 456 890 302',
        email: 'antonio.garcia@goit.global',
        city: 'Madrid',
        options: 'Group creation, editing teacher profiles',
      },
    ],
  };

  renderList = items => {
    return items.map(el => {
      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>
            <div>{el.firstName}</div>
            <div>{el.lastName}</div>
          </div>
          <div className={styles.info}>
            <span>{el.phone}</span>
            <span>{el.email}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.options}</div>
        </div>
      );
    });
  };
  handleTutor = data => {
    const newId = this.state.list.length > 0 ? this.state.list.length : 0;
    const addNewTutor = {
      id: newId,
      firstName: data.surname,
      lastName: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      options: data.options,
    };
    this.setState(prevState => {
      return {
        list: [...prevState.list, addNewTutor],
        isAddFormVisible: false,
      };
    });
  };

  render() {
    const { isAddFormVisible, list } = this.state;
    return (
      <section className={styles.tutorSection}>
        <div className={styles['title-icon']}>
          <Icon variant="cat" label="cat" />
          <h1>Tutors</h1>
        </div>
        <div className={styles.tutorsList}>{this.renderList(list)}</div>
        {isAddFormVisible && <AddTutor onFormSubmit={this.handleTutor} />}
        <button onClick={() => this.setState({ isAddFormVisible: true })}>
          ADD TUTOR
        </button>
      </section>
    );
  }
}

Tutors.propTypes = {
  list: PropTypes.array,
};

export default Tutors;
