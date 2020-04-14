const express = require('express');
const bodyParser = require('body-parser');
const MongoClient =  require('mongodb').MongoClient;
const assert = require('assert');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());



      const url = 'mongodb://localhost:27017';
      const dbName = 'my-blog';
      const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);


      client.close();
  })

app.get('/api/articles/:name', async (req, res) => {
    async (db) => {
       const articleName = req.params.name;

       const articleInfo = await db.collection('articles').findOne({ name: articleName});
       res.status(200).json(articleInfo);
    };
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    async (db) =>{

      const articleName = req.params.name;


      const articleInfo = await db.collection('articles').findOne({ name: articleName });
      await db.collection('articles').updateOne(
        { name: articleName },
          {
            $set: {
            upvotes: articleInfo.upvotes + 1,
          },
        });
      const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

      res.status(200).json(updatedArticleInfo);

    };
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const { username, text} = req.body;
    const articleName = req.params.name;

    async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne(
         { name: articleName },
            {
              $set: {
              comments: articleInfo.comments.concat({ username, text}),
            },
          });
       const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

       res.status(200).json(updatedArticleInfo);
   };
});

app.listen(8000, () => console.log('Listening on port 8000'));
