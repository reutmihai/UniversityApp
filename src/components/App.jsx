import University from './University/University';
import Tutors from './Tutors/Tutors';
import Sidebar from './Sidebar/Sidebar';
import Cities from './Cities/Cities';
import Faculties from './Faculties/Faculties';
import '../components/App.css';


export default function App() {
  return (
    <main className="flexbox">
      <Sidebar />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}
