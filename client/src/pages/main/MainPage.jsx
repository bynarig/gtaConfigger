import "./MainPage.scss";
import { useState } from "react";
import Slider from "rc-slider";
import "../../theme/slider/slider.scss";
// import Segmented from 'rc-segmented';
import '../../theme/segmented/segmented.scss';

export default function MainPage() {
  const [PlayerDistanceSliderValue, setPlayerDistanceSlider] = useState(0);
  const [VehicleDistanceSliderValue, setVehicleDistanceSlider] = useState(0);
  const [TerrainDistanceSliderValue, setTerrainDistanceSlider] = useState(0);
  const [fileUrl, setFileUrl] = useState(null); // State to store the file URL after the server responds

  // const [selectedSegment, setSelectedSegment] = useState(''); // State for Segmented component

  const handlePlayerDistanceSlider = (val) => {
    setPlayerDistanceSlider(val);
  };

  const handleVehicleDistanceSlider = (val) => {
    setVehicleDistanceSlider(val);
  };

  const handleTerrainDistanceSlider = (val) => {
    setTerrainDistanceSlider(val);
  };

  // const handleSegmentChange = (value) => {
  //   setSelectedSegment(value);
  //   // You can add additional logic here if needed
  // };

  const sendSettingsToServer = async () => {
    const settings = {
      settings: {
        loadDistances: {
          players: PlayerDistanceSliderValue.toString(),
          vehicles: VehicleDistanceSliderValue.toString(),
          terrain: TerrainDistanceSliderValue.toString()
        }
      }
    };

    const query = new URLSearchParams({ json: JSON.stringify(settings) });

    try {
      const response = await fetch(`http://localhost:3000/optimisation/optimise-settings?${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(settings)
      });
      console.log(query)

      if (response.ok) {
        const blob = await response.blob(); // Assuming the server responds with a file
        const fileURL = URL.createObjectURL(blob);
        setFileUrl(fileURL); // Store the file URL to create the download button
      } else {
        console.error("Server responded with an error");
      }
    } catch (error) {
      console.error("Error sending settings to server:", error);
    }
  };

  return (
    <div className="main-page">
      <div className="header">
        <h1>Load Distance</h1>
        <img className="image" src="/gta-logo.png" alt="" />
      </div>

      <div className="distance-sliders">
        <h3>Players</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={PlayerDistanceSliderValue}
            onChange={handlePlayerDistanceSlider}
          />
          <h2>{Math.round(PlayerDistanceSliderValue * 10) / 10}</h2>
        </div>

        <h3>Vehicles</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={VehicleDistanceSliderValue}
            onChange={handleVehicleDistanceSlider}
          />
          <h2>{Math.round(VehicleDistanceSliderValue * 10) / 10}</h2>
        </div>

        <h3>Terrain</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={TerrainDistanceSliderValue}
            onChange={handleTerrainDistanceSlider}
          />
          <h2>{Math.round(TerrainDistanceSliderValue * 10) / 10}</h2>
        </div>
      </div>
      <div className='buttons-group'>
        {/* Button to send slider values to the server */}
      <button className="send-button" onClick={sendSettingsToServer}>Generate my settings</button>

      {/* Button to download the file after the server responds */}
      {fileUrl && (
        <a  href={fileUrl} download="settings.xml">
          <button className="download-button">Download</button>
        </a>
      )}
      </div>


      {/* region SEGMENTED COMPONENT */}
      {/* <Segmented
        options={['VARIANT 1', 'VARIANT 2', 'LAST ONE']}
        onChange={handleSegmentChange}
        value={selectedSegment} // Controlled value
      />
      <h2>Selected: {selectedSegment}</h2> */}
      {/* endregion */}
    </div>
  );
}
