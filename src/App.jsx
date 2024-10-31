import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import NotFoundPage from "./pages/NotFoundPage";
// import FacultiesPage from "./pages/faculties/FacultiesPage";
// import FacultyPage from "./pages/faculties/components/faculty/FacultyPage";
// import FacultyDescriptionPage from "./pages/faculties/components/faculty/components/FacultyDescriptionPage";
// import FacultyHistoryPage from "./pages/faculties/components/faculty/components/FacultyHistoryPage";
import UniversityPage from "./pages/universities/UniversityPage";
import "./App.css";
import { lazy } from "react";

const FacultiesPage = lazy(() => import('./pages/faculties/FacultiesPage'));
const FacultyPage = lazy(() => import('./pages/faculties/components/faculty/FacultyPage'));
const FacultyDescriptionPage = lazy(() => import('./pages/faculties/components/faculty/components/FacultyDescriptionPage'))
const FacultyHistoryPage = lazy(() => import("./pages/faculties/components/faculty/components/FacultyHistoryPage"));

export default function App() {
  return (
    <BrowserRouter basename="/UniversityApp/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<UniversityPage />} />
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
