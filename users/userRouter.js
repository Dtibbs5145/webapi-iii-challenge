const express = 'express';
const db = require('./userDb');
const postDB = require('../posts/postDb');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const users = await db.insert(req.body);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: 'Be sure to add a name.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong while trying to add user' });
    }
});

router.post('/:id/posts', async (req, res) => {
    try {
        const users = await postDB.insert(req.body);
        console.log(users);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'This user could not be found.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong adding this post' });
    }

});

router.get('/', async (req, res) => {
    try {
        const users = await db.get();
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status({ message: 'There was an error retrieving the users.' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const users = await db.getById(req.params.id);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'User could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/:id/posts', async (req, res) => {
    try {
        const users = await db.getUserPosts(req.params.id);
        if (users) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'This users'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `There was an error retrieving ${user.username}'s posts`})
    }
});

// router.delete('/:id', async (req, res) => {
//     try {
//         const count = await db.
//     }

// });

// router.put('/:id', async (req, res) => {
//     try {
//         const users = await db.
//     }

// });

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;

