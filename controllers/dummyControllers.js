const data = require("../data/data.json")

const getDummyRoute = (req, res) => {
    res.send(data);
}

const getUserDummyRoute = (req, res) => {
    let id = req.params.id;
    const user = data.filter(item => item.id == id)
    res.send(user)
}

const postDummyRoute = async(req,res) =>{
    const newUser = {
        id : req.body.id,
        name : req.body.name,
        email : req.body.email
    }
    data.push(newUser);
    res.json({message:"new user added successfully"})
}

const putDummyRoute = (req,res) =>{
    const uid = data.find(id=>id.id == req.params.id)
    if (!uid) return res.status(404).send("User not found");

    uid.id = req.body.id;
    uid.name = req.body.name;
    uid.email = req.body.email;

    res.send(data)
}
const deleteDummyRoute = (req,res) =>{
    const uid = data.find(id=>id.id == req.params.id)
    if (!uid) return res.status(404).send("User not found");

    const index = data.indexOf(uid);
    data.splice(index,1)
    console.log(data)
    res.json(data)
}
module.exports = {
    getDummyRoute,
    getUserDummyRoute,
    postDummyRoute,
    putDummyRoute,
    deleteDummyRoute
}