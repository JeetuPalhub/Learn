const { body, validationResult } = require("express-validator");

const validateUser = [
    body("email").isEmail(),
    body("password").isLength({ min:6 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400);
            throw new Error(errors.array()[0].msg);
        }
        next();
    }
];
