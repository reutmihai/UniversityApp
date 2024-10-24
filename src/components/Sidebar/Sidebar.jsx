import React from 'react';
import styles from './Sidebar.module.css';
import university from "../../assets/university-sidebar.png";
import faculty from "../../assets/faculty-sidebar.png";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.colorSidebar}></div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">
                <span>
                  <img src={faculty} className={styles.icon} />
                </span>
                University
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <img src={university} className={styles.icon} />
                </span>
                Faculties
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.userProfile}>
        <span className={styles.userIcon}>👤</span>
        <p>Reut Mihai</p>
      </div>
    </aside>
  );
};

export default Sidebar;
