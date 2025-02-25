import {Translate} from '#/shared/locale';
import {useState} from 'react';
import Range from '#/shared/ui/Range';
import {sendSettingsToServer} from '#/entities/fileOptimisation';
import Button from '#/shared/ui/Button';

export default function SettingsPicker() {
  const getFirstValue = (value: number | number[]): number => {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  };
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [PlayerDistanceSliderValue, setPlayerDistanceSlider] = useState<number | number[]>(0);
  const [VehicleDistanceSliderValue, setVehicleDistanceSlider] = useState<number | number[]>(0);
  const [TerrainDistanceSliderValue, setTerrainDistanceSlider] = useState<number | number[]>(0);

  const handlePlayerDistanceSlider = (val: number | number[]) => {
    setPlayerDistanceSlider(val);
  };

  const handleVehicleDistanceSlider = (val: number | number[]) => {
    setVehicleDistanceSlider(val);
  };

  const handleTerrainDistanceSlider = (val: number | number[]) => {
    setTerrainDistanceSlider(val);
  };

  return (
    <div className="ml-7 mt-5 mb-5">
      <div className="distance-sliders">
        <h3>{Translate('MainPage.player')}</h3>
        <div className="slider-info flex">
          <Range
            min={-3}
            max={3}
            step={0.01}
            defaultValue={getFirstValue(PlayerDistanceSliderValue)}
            onChange={(selectedValue) => handlePlayerDistanceSlider(parseFloat(selectedValue))}
          />
          <h2 className="ml-3">{Math.round(getFirstValue(PlayerDistanceSliderValue) * 10) / 10}</h2>
        </div>

        <h3>{Translate('MainPage.vehicles')}</h3>
        <div className="slider-info flex">
          <Range
            min={-3}
            max={3}
            step={0.01}
            defaultValue={getFirstValue(VehicleDistanceSliderValue)}
            onChange={(selectedValue) => handleVehicleDistanceSlider(parseFloat(selectedValue))}
          />
          <h2 className="ml-3">{Math.round(getFirstValue(VehicleDistanceSliderValue) * 10) / 10}</h2>
        </div>

        <h3>{Translate('MainPage.terrain')}</h3>
        <div className="slider-info flex">
          <Range
            min={-3}
            max={3}
            step={0.01}
            defaultValue={getFirstValue(TerrainDistanceSliderValue)}
            onChange={(selectedValue) => handleTerrainDistanceSlider(parseFloat(selectedValue))}
          />
          <h2 className="ml-3">{Math.round(getFirstValue(TerrainDistanceSliderValue) * 10) / 10}</h2>
        </div>
      </div>
      <div className="buttons-group">
        <Button
          onClick={async () =>
            setFileUrl(
              await sendSettingsToServer(
                getFirstValue(PlayerDistanceSliderValue),
                getFirstValue(VehicleDistanceSliderValue),
                getFirstValue(TerrainDistanceSliderValue),
              ),
            )
          }
          name="Generate setings"
        />
        {fileUrl && (
          <a href={fileUrl} download="settings.xml">
            <Button name="Download" onClick={() => setFileUrl(null)} />
          </a>
        )}
      </div>
    </div>
  );
}
