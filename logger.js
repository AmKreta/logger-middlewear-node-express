const logger = (req, res, next) => {
    const { method, url } = req;
    console.log(`${method}  ${url}`);
    next();
}

const detailedLogger = (req, res, next) => {
    const { headers, rawHeaders, method, url } = req;
    console.log('\n');
    console.log((new Date).toString());
    console.log(`${method}  ${url}`);
    console.log(headers);
    console.log(rawHeaders);
    console.log('\n');
    next();
}

module.exports = {
    logger,
    detailedLogger
}