var fs = require('fs');

//Write a file
/*fs.writeFile('results.txt', 'Hello World', function(err) {
  if(err) throw err;
  console.log('File write completed');
});*/


// Read a file
/*fs.readFile('results.txt', 'utf8', function(err, data) {
  // the data is passed to the callback in the second argument
  console.log(data);
});*/


/*fs.unlink('sample/test.jpg', function (err) {
  if (err) throw err;
  console.log('successfully deleted the file');
});*/


/*fs.rename('sample/IMG_20141022_184619.jpg', 'sample/photo.jpg', function (err) {
  if (err) throw err;
  console.log('renamed complete');
});*/


/*var path = 'sample/';
fs.readdir(path, function (err, files) {
  if(err) throw err;
  files.forEach(function(file) {
    console.log(path+file);
    fs.stat(path+file, function(err, stats) {
      //console.log(stats);
    });
  });
});*/

/*fs.mkdir('newdir', 0777, function(err) {
  if(err) throw err;
  console.log('Created newdir');
});*/

/*
fs.rmdir('./newdir', function(err) {
    if(err) throw err;
    console.log('Removed newdir');
});
*/

/*fs.writeFile('newdir/test.json', '{"key": "value"}', function(error){
  if(err) throw err;
  console.log('File write completed');
});*/

/*fs.readFile('newdir/test.json', 'utf8', function(err, data) {
  if(err) throw err;
  console.log(data);
});
*/

/*
var file = fs.createReadStream('./data/results.txt', {flags: 'r'} );
var out = fs.createWriteStream('./data/results2.txt', {flags: 'w'});
file.on('data', function(data) {
  console.log('data', data);
  out.write(data);
});
file.on('end', function() {
  console.log('end');
  out.end(function() {
    console.log('Finished writing to file');
    test.done();
  });
});*/

/*
var file = fs.createReadStream('./data/results.txt', {flags: 'r'} );
var out = fs.createWriteStream('./data/results2.txt', {flags: 'w'});
file.pipe(out);
*/

var fs = require('fs');

fs.readdir('/path/to/html/files', function(err, files) {
    files.filter(function(file) { return file.substr(-5) === '.html'; })
         .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { inspectFile(contents); }); });
});

function inspectFile(contents) {
    if (contents.indexOf('data-template="home"') != -1) {
        // do something
    }
}

