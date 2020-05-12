import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get('/users', (req, res) => {
  // hard coding for simplicity, pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    {"id": 2, "firstName": "David", "lastName": "Norton", "email": "dnorton@gmail.com"},
    {"id": 3, "firstName": "Jessica", "lastName": "Lee", "email": "jessica.lee@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
