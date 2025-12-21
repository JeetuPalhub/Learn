const user = await User.create({
    name: "Jeetu",
    email:"jeetu@gmail.com",
    password: "123456"
})

const users = await User.find();
const users2 = await User.findById(id);

const updated = await User.findByIdAndUpdate(
    id,
    {name: "Updated"},
    {new: true}
)

 await User.findByIdAndDelete(id);
 