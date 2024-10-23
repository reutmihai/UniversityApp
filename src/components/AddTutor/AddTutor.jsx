import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const AddTutor = ({ onFormSubmit }) => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [options, setOptions] = useState('');
  
 const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit({ surname, name, phone, city, email, options });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "surname":
        return setSurname(value);
      case "name":
        return setName(value);
      case "phone":
        return setPhone( value );
      case "city":
        return setCity(value);
      case "email":
        return setEmail( value);
      case "options":
        return setOptions( value );
      default: return;
    }
  
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Add Tutor</h1>
          <label>
            <span>Surname</span>
            <input
              type="text"
              value={surname}
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

  AddTutor.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  }

  export default AddTutor;