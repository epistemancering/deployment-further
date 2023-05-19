let express = require("express")
let api = express()
api.use(express.static(__dirname + "/public"))
api.listen(3001, function() {
    console.log("on port 3001")
})