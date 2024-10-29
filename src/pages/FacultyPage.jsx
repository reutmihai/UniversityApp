import { createContext, useEffect, useState } from "react";
import Error from "../components/Error/Error";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const FacultyContext = createContext();

const FacultyPage = () => {
  const [faculty, setFaculty] = useState([
    { id: 0, name: "", description: "" },
  ]);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const response = [
      {
        id: 1,
        name: "Facultatea Automatica si Calculatoare",
        description: "Agewfe few fwq fw he gqf",
      },
      {
        id: 2,
        name: "Facultatea de Electronica",
        description: "Agewfe few fwq fw he gqf",
      },
      {
        id: 3,
        name: "Facultatea de Drept",
        description: "Agewfe few fwq fw he gqf",
      },
    ];
    setFaculty(response);
  }, []);

  if (error && error.length > 0) {
    return <Error message={error} />;
  }
  return (
    <div>
      <div>
        <Link to={`/faculties/${id}/description`}>Description</Link>
        <Link to={`/faculties/${id}/history`}>History</Link>
      </div>
      <FacultyContext.Provider value={faculty}>
        <Outlet />
      </FacultyContext.Provider>
    </div>
  );
};

export default FacultyPage;
