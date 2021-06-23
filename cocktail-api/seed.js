const db = require('./models')
const collectionData = require('./seedData/collectionData.json')

seedData = async () => {
    try{
        const deletedCollections = await db.Collection.deleteMany({})
        console.log(deletedCollections.deletedCount,'collection deleted');
        const seededCollections = await db.Collection.create(collectionData.collections);
        console.log(seededCollections.length, 'collections created successfully');
        console.log('YOU GOT COLLECTION DATA!')

        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

seedData();