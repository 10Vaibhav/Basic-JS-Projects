const express = require("express");

const app = express();

const fs = require("fs");

let list = [];


fs.readFile("tasks.txt","utf-8",function(err,data){
    list = data.split("\n").filter(Boolean);
})


app.get("/files/:fileName", function (req, res) {
  const file = req.params.fileName;

  fs.readFile(file, "utf-8", function (err, data) {
    res.json({
      data,
    });
  });
});

app.use(express.json());

app.post("/files/:fileName", function (req, res) {
  const file = req.params.fileName;

  const content = req.body.data;

  list.push(content);

  const data = list.join("\n");

  fs.writeFile(file, data, function (err, data) {
    res.json({
      msg: "post successfully!!",
    });
  });
});

app.delete("/files/:fileName", function (req, res) {
  const file = req.params.fileName;

  if (list.length > 0) {
    list.splice(list.length - 1, 1);

    let data;
    if (list.length > 0) {
      data = list.join("\n");
    } else {
      data = "";
    }
    fs.writeFile("tasks.txt", data, function (err, data) {
      res.json({
        msg: "delete successfully!!",
      });
    });
  } else {
    res.status(411).json({
      msg: "No Todo to delete!!",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
