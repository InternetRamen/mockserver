const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})
app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
console.log("Website running at http://localhost:3000")
app.listen(3000)