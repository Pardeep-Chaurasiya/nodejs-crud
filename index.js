const express = require('express');
const routes = require('./routes/dummyRoutes');
const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server started at port ' + PORT);
});
