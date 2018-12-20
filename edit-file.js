'use strict';

let fs = require('fs');

let num = Math.random();


fs.readFile('./files/test.txt', 'UTF-8', (err,data) => {
  if ( err ) { throw err; }
  console.log('before', data);
  fs.writeFile('./files/test.txt', num, (err) => {
    if (err) throw err;
    console.log('The file has been saved!', num);
    fs.readFile('./files/test.txt', 'UTF-8', (err,data) => {
      if ( err ) { throw err; }
      console.log('after', data);
    });
  });
});
