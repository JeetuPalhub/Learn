const fs = require("fs");

const readFile = async () => {
    try {
        const data = await fs.promises.readFile("test.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

readFile();
