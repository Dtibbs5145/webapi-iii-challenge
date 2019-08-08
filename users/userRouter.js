const express = 'express';

const router = express.Router();

// router.post('/', async (req, res) => {
//     try {
//         const users = await db.
//     }
// });

// router.post('/:id/posts', async (req, res) => {
//     try {
//         const users = await db.
//     }

// });

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

// router.get('/:id/posts', async (req, res) => {
//     try {
//         const users = await db.
//     }

// });

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
