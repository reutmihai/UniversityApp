import React, { Component } from 'react';
import styles from '../AddFaculty/AddFaculty.module.css'

export default class AddFaculty extends Component {
    state = {
        name: '',
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddFaculty(this.state);
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ name: value});
    }
  render() {
    const { name } = this.state;
    return (
      <form className={styles["faculties-form"]} onSubmit={this.handleSubmit}>
        <h2 className={styles["faculty-title"]}>Adding a faculty</h2>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Faculty"
          onChange={this.handleChange}
          required
        />
        <button type="submit" disabled={!name}>
          ADD
        </button>
      </form>
    );
  }
}
