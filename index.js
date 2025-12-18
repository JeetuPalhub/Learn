//sync code
const data= fs.readFileSync("file.txt");
console.log(data);

const data1 = fs.readFileSync("file.txt");
console.log(data1);

const data2 = fs.readFileSync("file.txt");
console.log(data2);

const data3 = fs.readFileSync("file.txt");
console.log(data3);

const data4 = fs.readFileSync("file.txt");
console.log(data4);

const data5 = fs.readFileSync("file.txt");
console.log(data5);
// blocking code


//async code
fs.readFile("file.txt", (err, data) => {
    console.log(data);
});

fs.readFile("file.txt", (err, data) => {
    console.log(data);
});

fs.readFile("file.txt", (err, data) => {
    console.log(data);
});

fs.readFile("file.txt", (err, data) => {
    console.log(data);
});
// non-blocking code


// callback hell
login(user, () => {
    getData(() => {
        saveData(() => {});
    });
});

// Promises
login(user)
.then(getData)
.then(saveData)
.catch(console.error);


// Async / Await
try {
    await login(user);
    await getData();
    await saveData();
} catch (err) {
    console.error(err);
}

