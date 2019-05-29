const express = require('express');

const router = express.Router();

//built-in middleware (global)
router.use(express.json());

//custom middleware

router.post('/', (req, res) => {

});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {

});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    if (!req.params.id) {
        res.status(400).json({ message: "invalid user id"})
    } else {
        req.user = `${req.params.id}`;
        next();
    }
};

function validateUser(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: "missing user data"})
    } else if (!req.body.name) {
        res.status(400).json({ message: "missing required name field"})
    }
    next();
};

function validatePost(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: "missing post data"})
    } else if (!req.body.text) {
        res.status(400).json({ message: "missing required text field"})
    } next();
};

module.exports = router;
