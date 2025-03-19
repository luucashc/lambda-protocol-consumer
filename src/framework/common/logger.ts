const winston = require('winston');

module.exports = winston.createLogger({
    levels: {
        EMERGENCY: 0,
        ERROR: 1,
        WARN : 2,
        INFO : 3,
        DEBUG: 4,
        TRACE: 5
    },
    level: process.env.LOGGER_DEBUG ? 'DEBUG' : 'INFO',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()),
    defaultMeta: {
        service_name: process.env.APPLICATION_NAME
    },
    transports: [
        new winston.transports.Console
    ],
});