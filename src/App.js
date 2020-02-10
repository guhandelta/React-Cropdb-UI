import React, { useEffect, useState } from "react";
import "./App.css";
import { Crops, CropsForm } from "./components";
import { Container } from "semantic-ui-react";

function App() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("/crops").then(response =>
      response.json().then(data => {
        setCrops(data.crops);
      })
    );
  }, []);

  console.log(crops);

  return (
    <div className="App">
      <Container style={{ marginTop: 40 }}>
        <CropsForm
          onNewCrop={crop => setCrops(currentCrops => [crop, ...currentCrops])}
          // [crop, ...currentCrops] => adds the new crop to the beginning || [...currentCrops, crop] => adds the new crop to the end
        />
        <Crops crops={crops} />
      </Container>
    </div>
  );
}

export default App;
