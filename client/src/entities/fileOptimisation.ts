import axios from 'axios';

export const sendSettingsToServer = async (
  PlayerDistanceSliderValue: number,
  VehicleDistanceSliderValue: number,
  TerrainDistanceSliderValue: number,
): Promise<string | undefined> => {
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
      return URL.createObjectURL(blob);
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
};
