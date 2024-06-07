const express = require("express");
const moongose = require('mongoose');
moongose.connect("mongodb+srv://admin:drSl1q8vregrycts@cluster0.v9gaqum.mongodb.net/userappnew");
const app = express();
app.use(express.json());
const User = moongose.model('Users',{ name : String , password : String , email : String });



app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const exisitingUser = User.findOne({ email: username });
  if(exisitingUser){
    res.status(400).send("exisitng usser")
  }
  const user = new User({
    name: name,
    password: password,
    email: username,
  })
user.save()
  res.json({
    "msg" : "created successfully"
  })
})
app.listen(3000);
