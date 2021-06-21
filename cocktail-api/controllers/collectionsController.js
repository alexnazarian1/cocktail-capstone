const db = require('../models');

const index = async (req, res, next) => {
    try {
        const foundCollections = await db.Collection.find({});
        if (foundCollections.length === 0) return res.json({ message: 'No collections in database' });
        res.json({ collections: foundCollections });
    } catch (err) {
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const foundCollection = await db.Collection.findById({ _id: req.params.id });
        if (!foundCollection) return res.json({ message: 'Collection not found in database' });
        res.json({ collection: foundCollection });
    } catch (err) {
        next(err);
    }
}

const create = async (req, res, next) => {
    try {
        const newCollection = await db.Collection.create(req.body);
        res.status(201).json({ collection: newCollection });
    } catch (err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const updatedCollection = await db.Collection.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new:true },
        );
        if (!updatedCollection) return res.json({ message: 'Collection not found in database' });
        res.status(201).json({ collection: updatedCollection });
    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        const deletedCollection = await db.Collection.findByIdAndDelete({ _id: req.params.id });
        if (!deletedCollection) return res.json({ message: 'Collection not found in database' });
        res.json({ collection: deletedCollection });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
  };