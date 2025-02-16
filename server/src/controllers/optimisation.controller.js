import fs from "fs";
import xml2js from "xml2js";
import { logger } from "../utils/logger.js";

class OptimiserController {
	optimiseSettings (req, res) {
		const xmlFile = "./src/data/preview-settings.xml"; // replace with the actual file path
		const xmlData = fs.readFileSync(xmlFile, "utf8");
		console.log(req.body)
		// Parse the XML file
		const parser = new xml2js.Parser();
		let result;
		parser.parseString(xmlData, (err, response) => {
			if (err) {
				console.error(err);
				res.status(500).send("Internal Server Error");
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

			// Save the updated XML file
			// fs.writeFileSync(xmlFile, modifiedXml);

			// Return the modified XML file as a response
			console.log(modifiedXml); // log the modified XML for debugging
			res.send(modifiedXml);
		});
	}
}

export default new OptimiserController();
