import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  // hard coding for simplicity, pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    {"id": 2, "firstName": "David", "lastName": "Norton", "email": "dnorton@gmail.com"},
    {"id": 3, "firstName": "Jessica", "lastName": "Lee", "email": "jessica.lee@gmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
