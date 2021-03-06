const fs = require('fs');

const libs = {};
fs.readdirSync(__dirname).forEach((file) => {
  const lib = file.replace('.js', '');
  if (lib !== 'index') {
    // eslint-disable-next-line
    libs[lib] = require('./' + file);
  }
});

module.exports = libs;
