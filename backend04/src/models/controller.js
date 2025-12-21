const user = await User.create({
    name:"jeetu",
    Password:"12345",
    email: "jeetu@gmail.com"
})

const user = await User.find()
const user = await User.findById(id)

const user = await User.findByIdAndUpdate(
    id,
    {name: "update"},
    {new: true}
)

const user = await User.findByIdAndDelete(id)
