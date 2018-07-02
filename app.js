const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const boom = require('boom');

const apiRouter = require('./routes/api');
const formatHttpErrorMessage = require('./utils/format-http-error-message');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
    if (!err) {
        return next();
    }

    const httpError = err.isBoom ? err : boom.boomify(err, { statusCode: 500 });
    const errorMessage = formatHttpErrorMessage(req, httpError);
    console.error(errorMessage, httpError);

    if (!res.headersSent) {
        res.status(httpError.output.statusCode).json(httpError.output.payload);
    }
});

module.exports = app;
