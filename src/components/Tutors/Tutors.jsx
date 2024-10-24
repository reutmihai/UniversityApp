import styles from "./Tutors.module.css";
import AddTutor from "../AddTutor/AddTutor";
import { Icon } from "../Common/Icon/Icon";
import { useEffect, useState } from "react";
const TUTORS_KEY = "tutors";

const Tutors = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(TUTORS_KEY);
    try {
      if (data && data !== "[]") {
        setList(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error parsing localStorage data:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TUTORS_KEY, JSON.stringify(list));
  }, [list]);

  const renderList = (items) => {
    return items.map((el) => {
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

  const handleTutor = (data) => {
    const newId = list.length > 0 ? list.length : 0;
    const addNewTutor = {
      id: newId,
      firstName: data.surname,
      lastName: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      options: data.options,
    };
    setList((prevState) => {
      return [...prevState, addNewTutor];
    });
    setIsAddFormVisible(false);
  };

  return (
    <section className={styles.tutorSection}>
      <div className={styles["title-icon"]}>
        <Icon variant="cat" label="cat" />
        <h1>Tutors</h1>
      </div>
      <div className={styles.tutorsList}>{renderList(list)}</div>
      {isAddFormVisible && <AddTutor onFormSubmit={handleTutor} />}
      <button onClick={() => setIsAddFormVisible(true)}>ADD TUTOR</button>
    </section>
  );
};

export default Tutors;
