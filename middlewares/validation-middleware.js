
const validationMiddleware = (req, res, next) => {

    let movie = req.body;

    if (!movie.id || !movie.name || !movie.rating || !movie.description || !movie.genre || !movie.casts) {
        res.status(400).send("All Field Required");
        return;
    }

    if (typeof (movie.id) != "number" || typeof (movie.name) != "string" || typeof (movie.rating) != "number" || typeof (movie.description) != "string" || typeof (movie.genre) != "string" || movie.casts.every(el => typeof (el) != "string")) {
        res.status(400).send('Data is not valid');
        return;
    }

    next();
}

module.exports = {
    validationMiddleware
}