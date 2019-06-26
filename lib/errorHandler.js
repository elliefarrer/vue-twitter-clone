/* eslint-disable no-console */
function errorHandler(err, req, res, next) {
    console.log('There was an error', err);

    if(err.name === 'ValidationError') {
        const response = {};
        for (const key in err.errors) {
            const errObj = err.errors[key];
            console.log('Here it is', key, errObj.message);
            response[key] = errObj.message;       
        }

        return res.status(422).json({ errors: response, message: '422: Unprocessable entity' });
    }
    res.status(500).json({ message: '500: Ooops! A server error has occured' });
    next();
}

module.exports = errorHandler;