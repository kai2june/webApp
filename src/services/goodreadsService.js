var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function () {

    var getBookById = function (id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=uLBsM3qlJ96rmGJ4D47IA'
        };
        var callback = function (response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                console.log(str);
                parser.parseString(str,
                    function (err, result) {
                        console.log('It"s still working');
                        // cb(null, result.GoodreadsResponse.book);
                    });
            });
            // cb(null, {description: 'Our description'});
        };
        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;