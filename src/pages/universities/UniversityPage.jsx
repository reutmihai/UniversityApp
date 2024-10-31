import UniversityCard from "../common/UniversityCard/UniversityCard";
import Tutors from "./components/Tutors/Tutors";
import Cities from "./components/Cities/Cities";
import Faculties from "./components/Faculties/Faculties";
import { UNSAFE_ViewTransitionContext } from "react-router-dom";

const UniversityPage = () => {
  return (
    <div>
      <UniversityCard />
      <Tutors />
      <Cities />
      <Faculties />
    </div>
  );
};

export default UniversityPage;
