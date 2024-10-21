import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.colorSidebar}></div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">
                <span className={styles.icon}>📚</span> University
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.icon}>🏛</span> Faculties
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.userProfile}>
        <span className={styles.userIcon}>👤</span>
        <p>Bill Gates</p>
      </div>
    </aside>
  );
};

export default Sidebar;
