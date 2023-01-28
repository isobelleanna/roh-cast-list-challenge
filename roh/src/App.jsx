import "./App.scss";
import CreativeList from "./containers/CreativeList/CreativeList";
import { useState, useEffect } from "react";

function App() {
  // const [performanceDetails, setPerformanceDetails] = useState([]);

  // const getPerformance = async () => {
  //   const url =
  //     "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban";
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // };
  useEffect(() => {
    fetch(
      "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban",
      {
        method: "get",
        headers: { Accept: "*/*" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <CreativeList />
      <p></p>
    </div>
  );
}

export default App;
