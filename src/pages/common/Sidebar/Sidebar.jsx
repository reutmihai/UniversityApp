import React from "react";
import styles from "./Sidebar.module.css";
import university from "../../../assets/university-sidebar.png";
import faculty from "../../../assets/faculty-sidebar.png";
import University from "../UniversityCard/UniversityCard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      id: "1",
      name: "University",
      icon: university,
      path: "/",
    },

    {
      id: "2",
      name: "Faculties",
      icon: faculty,
      path: "/faculties",
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.colorSidebar}></div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link key={item.id} to={item.path} className={styles.items}>
                  <img src={item.icon} alt="" className={styles.icon} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.userProfile}>
        <span className={styles.userIcon}>👤</span>
        <p>Reut Mihai</p>
      </div>
    </div>
  );
};

export default Sidebar;
