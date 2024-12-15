const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors())// by this all domain can resend the request to this backend server.

// to host frontend and backend on same server so, there is no cors required because no request sending on cross origin.
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/sum", function (req, res) {
  const lastSum = global.lastCalculatedSum || "No Sum calculated yet";
  res.send(`Last Calculated Sum is : ${lastSum}`);
});

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  global.lastCalculatedSum = a + b;

  res.json({
    answer: a + b,
  });
});

app.listen(3002, () => {
  console.log("server Running on 3002");
});
