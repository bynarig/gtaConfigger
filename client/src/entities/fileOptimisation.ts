import axios from 'axios';

export const sendSettingsToServer = async (
  PlayerDistanceSliderValue: number,
  VehicleDistanceSliderValue: number,
  TerrainDistanceSliderValue: number,
): Promise<any> => {
  try {
    const settings = {
      settings: {
        loadDistances: {
          players: PlayerDistanceSliderValue.toString(),
          vehicles: VehicleDistanceSliderValue.toString(),
          terrain: TerrainDistanceSliderValue.toString(),
        },
      },
    };

    const response = await axios.post(
      'http://localhost:8905/optimisation/optimise-settings',
      settings,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      },
    );

    if (response.status === 200) {
      const blob = await response.data;
      const fileURL = URL.createObjectURL(blob);
      return fileURL;
    }
  } catch (e) {
    return e;
  }
  return null;
};
