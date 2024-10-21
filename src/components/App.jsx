import University from './University/University';
import Tutors from './Tutors/Tutors';
import Sidebar from './Sidebar/Sidebar';
import Cities from './Cities/Cities';
import Faculties from './Faculties/Faculties';
import styles from '../components/App.module.css';


export default function App() {
  return (
    <div className={styles.flexbox}>
      <Sidebar />
      <div className={styles.content}>
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </div>
    </div>
  );
}
