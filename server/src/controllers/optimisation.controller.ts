import fs from 'fs';
import xml2js from 'xml2js';
import {logger} from '#utils/logger';
import {Request, Response} from 'express';

class OptimiserController {
  optimiseSettings(req: Request, res: Response) {
    const xmlFile = './src/data/preview-settings.xml'; // replace with the actual file path
    const xmlData = fs.readFileSync(xmlFile, 'utf8');
    // Parse the XML file
    const parser = new xml2js.Parser();
    let result;
    parser.parseString(xmlData, (err, response) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      result = response;

      // Update the XML file based on the data
      const loadDistances = req.body.settings.loadDistances;
      result.Settings.graphics[0].PedLodBias[0].$.value = loadDistances.players;
      result.Settings.graphics[0].VehicleLodBias[0].$.value = loadDistances.vehicles;
      result.Settings.graphics[0].LodScale[0].$.value = loadDistances.terrain;

      // Convert the modified XML object back to a string
      const builder = new xml2js.Builder();
      const modifiedXml = builder.buildObject(result);
      logger.info('Setting generated');
      res.send(modifiedXml);
    });
  }
}

export default new OptimiserController();
