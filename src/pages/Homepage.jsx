import University from '../components/University/University';
import Tutors from '../components/Tutors/Tutors';
import Cities from '../components/Cities/Cities';
import Faculties from '../components/Faculties/Faculties';

const Homepage = () => {
  return (
    <div>
      <University />
      <Tutors />
      <Cities />
      <Faculties />
    </div>
  );
}

export default Homepage