import winston from "winston";


const customFormat = winston.format.combine(
  winston.format.timestamp({
	  format: "HH:mm:ss"
  }),
  winston.format.align(),
  winston.format.printf((info) => {
	  const { timestamp, level, message, ...extra } = info;
	  let color = "";
	  switch (level) {
		  case "info":
			  color = "\x1b[32m"; // green
			  break;
		  case "warn":
			  color = "\x1b[33m"; // yellow
			  break;
		  case "error":
			  color = "\x1b[31m"; // red
			  break;
		  default:
			  color = "\x1b[0m"; // reset
	  }
	  return `${timestamp} | ${color}${level}\x1b[0m | ${message.trim()}`;
  })
);

export const logger = winston.createLogger({
	level: "info",
	format: customFormat,
	transports: [
		new winston.transports.File({ filename: "error.log", level: "error" }),
		// new winston.transports.File({ filename: "info.log", level: "info" }),
		// new winston.transports.File({ filename: "warning.log", level: "warn" }),
		new winston.transports.File({ filename: "combined.log" })
	]
});

if (process.env.NODE_ENV !== "production") {
	logger.add(new winston.transports.Console({
		format: customFormat
	}));
}
