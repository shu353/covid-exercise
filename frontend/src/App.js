import { useEffect, useState } from "react";
import "./App.css";
import * as reactBootstrap from "react-bootstrap";

function App() {
  const apiURL = "http://localhost:5000/apiData";

  const [data, setData] = useState();

  const fetchApi = async () => {
    const response = await fetch(apiURL);

    const responseJson = await response.json();

    setData(responseJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const renderData = (data, index) => {
    return (
      <tr key="index">
        <td>{data.country}</td>
        <td>{data.confirmed}</td>
        <td>{data.recovered}</td>
      </tr>
    );
  };
  return (
    <div className="App">
      <reactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>{data.map(renderData)}</tbody>
      </reactBootstrap.Table>
    </div>
  );
}

export default App;
