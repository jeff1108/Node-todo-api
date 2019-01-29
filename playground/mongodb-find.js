const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c4ad3fb6a4cb1567af06bca')
  // }).toArray().then((docs) => {
  //   console.log('Todo');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todo count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({
      name: 'Ellen'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
