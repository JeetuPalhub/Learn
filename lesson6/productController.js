const product = require("./product");

const result = await cloudinary.uploader.upload(req.file.path);
imageUrl = result.secure_url;

const product = await product.create({
    name: req.body.name,
    price: req.body.price,
    image: imageUrl
})