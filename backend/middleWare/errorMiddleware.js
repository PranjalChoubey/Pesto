const NotFound = (req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);

    res.status(400);
    next(error);
};

const ErrorHandler = (err, req, res, next) => {
 let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
 let message = err.message ;

 if (err.name === 'CastErrpr' && err.kind === 'ObjectId'){
    message = `Resource not found`;
    statusCode = 404;
 }

 res.status(statusCode).json ({
    message,
    stack: process.env.Node_ENV === 'production' ? 'S' : err.stack, });
};

export {NotFound, ErrorHandler};