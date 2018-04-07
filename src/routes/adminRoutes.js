var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        author: 'Lev Nikolayevich Tolstoy',
        genre: 'Historical Fiction',
        bookId: 656,
        read: false
    },
    {
        title: 'Les Misérables',
        author: 'Victor Hugo',
        genre: 'Historical Fiction',
        bookId: 24280,
        read: false
    },
    {
        title: 'Good night',
        author: 'hacker',
        genre: 'action',
        read: false
    },
    {
        title: 'Heterosexual',
        author: 'iverson',
        genre: 'sex',
        read: false
    },
    {
        title: 'Jack the reaper',
        author: 'iverson',
        genre: 'sorrow',
        read: false
    },
    {
        title: 'Bad boy',
        author: 'dick',
        genre: 'fiction',
        read: true
    },
    {
        title: 'King of the world',
        author: 'candy',
        genre: 'fiction',
        read: false
    },
    {
        title: 'A good day',
        author: 'iverson',
        genre: 'comedy',
        read: false
    }
];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //res.send('inserting books');
        });

    return adminRouter;
};
module.exports = router;