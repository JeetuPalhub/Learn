const errorHandler = require("./middleware/errorMiddleware");

app.use(errorHandler);

const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
})

app.use(limiter);
