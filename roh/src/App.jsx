import "./App.scss";
import CreativeList from "./containers/CreativeList/CreativeList";
import CastList from "./containers/CastList/CastList";
import Title from "./components/Title/Title";
import { useState, useEffect } from "react";

function App() {
  const [performanceDetails, setPerformanceDetails] = useState([]);

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
        setPerformanceDetails(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title title="Turandot" />
        <h2 className="App__date">Dates: </h2>
        <p className="App__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          maxime, fugit autem placeat vero officiis iusto sint vel et eius.
          Eligendi dolore ratione esse iste et deleniti aliquid quo incidunt?
        </p>
      </header>
      <Title title="Creatives" />
      <CreativeList />
      <Title title="Cast" />
      <CastList />
    </div>
  );
}

export default App;
