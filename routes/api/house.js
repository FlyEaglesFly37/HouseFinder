const express = require('express');
const router = express.Router();
const House = require('../../models/House');

router.get('/', (req, res) => {
    House.find()
        .then(houses => res.json(houses));
});

router.post('/', (req, res) => {
    const newHouse = new House({
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        mls_number: req.body.mls_number,
        asking_price: req.body.asking_price,
        pros: [],
        cons: []
    });
    newHouse.save().then(house => res.json(house));
});

router.delete('/:id', (req, res) => {
    House.findById(req.params.id)
        .then(house => house.remove().then(() => res.json({
            success: true
        })))
        .catch(error => res.status(404).json({success: false}));
});

router.get('/:id', (req, res) => {
    House.findById(req.params.id)
        .then(house => res.json(house));
})

module.exports = router;