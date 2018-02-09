var fs = require('fs')


var file = process.argv[2]
var text = fs.readFileSync(file)

var json = JSON.parse(text)
for (var i in json) {
	json[i].autodownloadoptional = true
}
text = JSON.stringify(json)

fs.writeFileSync(file, text)
