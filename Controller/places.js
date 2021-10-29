const placeSchema = require('../Models/places');

const getAllPlaces = async(req, res) => {
    try {
        const allPost = await placeSchema.find({});
        res.status(200).json(allPost);
    } catch (error) {
        res.status(500).json({'mes':error.message});
    }
};

const addNewPlace = async(req, res) => {
    const createNewPlace = placeSchema(req.body);
    try {
        const createdPlace = await createNewPlace.save();
        res.status(200).json(createdPlace);
    } catch (error) {
        res.status(500).json({'mes':error.message});
    }
};

module.exports = {getAllPlaces, addNewPlace};