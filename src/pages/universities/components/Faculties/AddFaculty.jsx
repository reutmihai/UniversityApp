import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Faculties.module.css";

const AddFaculty = ({ onFacultySubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFacultySubmit({ name });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <form className={styles["faculties-form"]} onSubmit={handleSubmit}>
      <h2 className={styles["faculty-title"]}>Adding a faculty</h2>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Faculty"
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={!name}>
        ADD
      </button>
    </form>
  );
};

AddFaculty.propTypes = {
  onFacultySubmit: PropTypes.func.isRequired,
};

export default AddFaculty;
