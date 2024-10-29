import University from "./University/University";
import Tutors from "./Tutors/Tutors";
import Sidebar from "./Sidebar/Sidebar";
import Cities from "./Cities/Cities";
import Faculties from "./Faculties/Faculties";
import "../components/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";
import FacultyHistoryPage from "./Faculties/FacultyHistoryPage";
import FacultyDescriptionPage from "./Faculties/FacultyDescriptionPage";
import FacultiesPage from "../pages/FacultiesPage";
import FacultyPage from "../pages/FacultyPage";

export default function App() {
  return (
    <BrowserRouter basename="/UniversityApp/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="faculties" element={<FacultiesPage />} />
          <Route path="faculties/:id" element={<FacultyPage />}>
            <Route index element={<FacultyDescriptionPage />} />
            <Route path="description" element={<FacultyDescriptionPage />} />
            <Route path="history" element={<FacultyHistoryPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
