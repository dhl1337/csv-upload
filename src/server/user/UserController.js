import User from './UserModel';

export function addUser (req, res) {
    User
        .create(req.body, (err, result) => {
            err ? res.status(500).json(err) : res.json(result);
        })
}

export function getUser (req, res) {
    User
        .find({})
        .exec((err, result) => {
            err ? res.status(500).json(err) : res.json(result);
        })
}