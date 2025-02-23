import './MainPage.scss';
import { useState } from 'react';
import Slider from 'rc-slider';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const [PlayerDistanceSliderValue, setPlayerDistanceSlider] = useState<number | number[]>(0);
  const [VehicleDistanceSliderValue, setVehicleDistanceSlider] = useState<number | number[]>(0);
  const [TerrainDistanceSliderValue, setTerrainDistanceSlider] = useState<number | number[]>(0);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handlePlayerDistanceSlider = (val: number | number[]) => {
    setPlayerDistanceSlider(val);
  };

  const handleVehicleDistanceSlider = (val: number | number[]) => {
    setVehicleDistanceSlider(val);
  };

  const handleTerrainDistanceSlider = (val: number | number[]) => {
    setTerrainDistanceSlider(val);
  };

  const sendSettingsToServer = async () => {
    const settings = {
      settings: {
        loadDistances: {
          players: PlayerDistanceSliderValue.toString(),
          vehicles: VehicleDistanceSliderValue.toString(),
          terrain: TerrainDistanceSliderValue.toString(),
        },
      },
    };

    try {
      const response = await fetch(`http://localhost:8905/optimisation/optimise-settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        const blob = await response.blob();
        const fileURL = URL.createObjectURL(blob);
        setFileUrl(fileURL);
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error sending settings to server:', error);
    }
  };

  // Helper function to ensure the value is a number
  const getSliderValue = (value: number | number[]): number => {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  };

  return (
    <div className="main-page">
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ua')}>Українська</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
      </div>
      <div className="header">
        <h1>Load Distance</h1>
        <img className="image" src="gta-logo.svg" alt="" />
      </div>

      <div className="distance-sliders">
        <h3>{t('MainPage.player')}</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={getSliderValue(PlayerDistanceSliderValue)}
            onChange={handlePlayerDistanceSlider}
          />
          <h2>{Math.round(getSliderValue(PlayerDistanceSliderValue) * 10) / 10}</h2>
        </div>

        <h3>{t('MainPage.vehicles')}</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={getSliderValue(VehicleDistanceSliderValue)}
            onChange={handleVehicleDistanceSlider}
          />
          <h2>{Math.round(getSliderValue(VehicleDistanceSliderValue) * 10) / 10}</h2>
        </div>

        <h3>{t('MainPage.terrain')}</h3>
        <div className="slider-info">
          <Slider
            className="slider"
            min={-3}
            max={3}
            step={0.01}
            value={getSliderValue(TerrainDistanceSliderValue)}
            onChange={handleTerrainDistanceSlider}
          />
          <h2>{Math.round(getSliderValue(TerrainDistanceSliderValue) * 10) / 10}</h2>
        </div>
      </div>
      <div className="buttons-group">
        <button className="send-button" onClick={sendSettingsToServer}>Generate my settings</button>
        {fileUrl && (
          <a href={fileUrl} download="settings.xml">
            <button className="download-button">Download</button>
          </a>
        )}
      </div>
    </div>
  );
}