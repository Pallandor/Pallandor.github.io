const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// load environment variables
dotenv.load({path: __dirname + '/.env_example'});

const app = express();
const PORT = process.env.PORT || 8080;

// express config
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route handlers
const articleAPIRoutes = require(__dirname + '/routes/api/article');

// install routes
app.use('/api/v1/', articleAPIRoutes);

// Start up the server.
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }
  winston.info(`Listening on port ${PORT}`);
});
