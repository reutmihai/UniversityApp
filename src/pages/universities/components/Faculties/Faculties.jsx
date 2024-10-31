import { useState, useEffect } from "react";
import { Icon } from "../../../common/Icon/Icon";
import AddFaculty from "./AddFaculty";
import styles from "./Faculties.module.css";

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);
  const [isAddFacultyVisible, setIsAddFacultyVisible] = useState(false);

  const renderFaculties = (faculties) => {
    if (!faculties || faculties.length === 0) {
      return <div>There are no faculties yet</div>;
    }

    return faculties.map((faculty) => {
      return (
        <div key={faculty.id} className={styles["faculties-list"]}>
          <span className={styles["faculty-name"]}>{faculty.name}</span>
        </div>
      );
    });
  };

  const handleAddFaculty = (faculty) => {
    const newId = Date.now();
    const addNewFaculty = {
      name: faculty.name,
      id: newId,
    };

    setFaculties((prevState) => {
      return [...prevState, addNewFaculty];
    });
    setIsAddFacultyVisible(false);
  };

  return (
    <section className={styles["faculties-section"]}>
      <div className={styles["title-icon"]}>
        <Icon variant="pencil" label="pencil" />
        <h1>Faculties</h1>
      </div>
      <div className={styles["faculties-list"]}>
        {renderFaculties(faculties)}
      </div>
      {isAddFacultyVisible && <AddFaculty onFacultySubmit={handleAddFaculty} />}
      <button onClick={() => setIsAddFacultyVisible(true)}>ADD faculty</button>
    </section>
  );
};

export default Faculties;
