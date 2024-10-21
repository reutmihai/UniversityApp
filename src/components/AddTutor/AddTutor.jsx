import React, { Component } from 'react';

export default class AddTutor extends Component {
  componentDidMount() {
    console.log('AddTutors Mounting...');
  }

  componentDidUpdate() {
    console.log('AddTutors Updating...');
  }

  componentWillUnmount() {
    console.log('AddTutors Unmounting...');
  }

  state = {
    surname: '',
    name: '',
    phone: '',
    city: '',
    email: '',
    options: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { surname, name, phone, email, city, options } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Tutor</h1>
          <label>
            <span>Surname</span>
            <input
              type="text"
              value={surname}
              name="surname"
              placeholder="Surname"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <span>Phone number</span>
            <input
              type="tel"
              value={phone}
              name="phone"
              placeholder="Phone number"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <span>City</span>
            <input
              type="text"
              value={city}
              name="city"
              placeholder="City"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <span>Options</span>
            <input
              type="text"
              value={options}
              name="options"
              placeholder="Options"
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
            disabled={!surname || !name || !phone || !email || !city}
          >
            Invite
          </button>
        </form>
      </>
    );
  }
}
