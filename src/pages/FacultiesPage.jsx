import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../components/Error/Error";

const FacultiesPage = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = [
      {
        id: 1,
        name: "Facultatea Automatica si Calculatoare",
      },
      {
        id: 2,
        name: "Facultatea de Electronica",
      },
      {
        id: 3,
        name: "Facultatea de Drept",
      },
    ];
    setList(response);
  }, []);

  if (error && error.length > 0) {
    return <Error message={error} />;
  }
  return (
    <div>
      <h2>Faculties</h2>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            {item.name}
            <Link to={`/faculties/${item.id}/description`}>
              <span>Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultiesPage;
