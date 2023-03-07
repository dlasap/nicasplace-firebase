const db = require("../firebase.js");

module.exports = {
  getAll: async (collection) => {
    try {
      const collectionRef = db.collection(collection);
      const snapshot = await collectionRef.get();

      let data = [];

      await snapshot.forEach((item) =>
        data.push({
          ...item.data(),
          id: item.id,
        })
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  addDoc: async (collection, doc) => {
    try {
      const result = await db.collection(collection).add(doc);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  getByDoc: async (collection, doc) => {
    try {
      const result = await db.collection(collection).doc(doc).get();
      return result.data();
    } catch (error) {
      console.log(error);
    }
  },
  updateByDoc: async (collection, doc, data) => {
    try {
      const result = await db.collection(collection).doc(doc).update(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  deleteByDoc: async (collection, doc) => {
    try {
      const result = await db.collection(collection).doc(doc).delete();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
