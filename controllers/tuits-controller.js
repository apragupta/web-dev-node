import posts from "./tuits/tuits.js"
let tuits = posts;


const createTuit = (req,res) => {
    const newTuit = req.body;
    console.log(newTuit)
    newTuit._id = (new Date()).getTime() + '';
    newTuit.stats  = {"likes":0, "comments":0, "retuits": 0}
    //default username and image is: Apra Gupta
    newTuit.postedBy = {
        "username": "Apra Gupta"
    }
    newTuit.handle = "apragupta"

    newTuit["avatar-image"] = "https://i.imgur.com/dUUJ6Gm.jpeg"

    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req,res) => {
    res.json(tuits);
}

const updateTuit = (req,res) => {
    const tuitIdToUpdate = req.params.tid;
    const updateTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate? updateTuit: t);
    res.sendStatus(200);
}

const deleteTuit = (req,res) => {
    const tuitIdToDelete = req.params.tid;
    tuits = tuits.filter(t=> t._id !== tuitIdToDelete);
    res.sendStatus(200);
}


export  default (app) => {
    app.post('/api/tuits',createTuit);
    app.get('/api/tuits',findAllTuits);
    app.put('/api/tuits/:tid',updateTuit);
    app.delete('/api/tuits/:tid',deleteTuit);

}