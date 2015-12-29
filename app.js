function run(dir) {
  dir = typeof dir === 'undefined' ? (__dirname + '/screenshots/') : dir;
  var express = require('express');
  var app = express();
  var multer = require('multer');
  var fs = require('fs-extra');
  var mime = require('mime-types');

  fs.ensureDirSync(dir);

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + (mime.extension(file.mimetype) || 'bin'));
    }
  });

  var upload = multer({storage: storage})

  app.use(express.static('public'));

  app.post('/upload', upload.single('screenshot'), function(req, res, next) {
    res.redirect('/');
  });

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
}

module.exports = run;

if (require.main === module) {
  run();
}
