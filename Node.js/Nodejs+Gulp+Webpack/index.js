var test = require('./test.js');
test.showName();
console.log(test);
var file = require('fs');
file.writeFile('build.js', '');
for (var i in test) {
    file.appendFile('build.js', getCode(i, test[i]));
}
file.appendFile('build.js', 'showName();\n');

function getCode(key, value) {
    return 'var ' + key + ' = ' + value + ';\n';
}