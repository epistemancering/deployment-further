let express = require("express")
let api = express()
api.use(express.static(__dirname + "/public"))
api.listen(80, function() {
    console.log("on port 80")
})