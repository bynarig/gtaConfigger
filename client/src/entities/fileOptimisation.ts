export const sendSettingsToServer = async(PlayerDistanceSliderValue: number,VehicleDistanceSliderValue: number , TerrainDistanceSliderValue: number): Promise<any> => {
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
      return(fileURL);
    }
      console.error('Server responded with an error');

  } catch (error) {
    console.error('Error sending settings to server:', error);
  }
};