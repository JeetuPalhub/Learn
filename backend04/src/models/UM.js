const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjecctId,
        ref: "User", // model name
        required: true
    }
})

// author stores a User document’s _id

// ref: "User" tells Mongoose which model it belongs to

// const posts = await Post.find();
// const posts = await Post.find().populate("author")