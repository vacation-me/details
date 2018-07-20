const express = require('express');

const model = require('./model.js');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(`${__dirname}/../public`));

app.get('/api/listings/:id', (req, res) => {
  const listingId = req.params.id;
  model.getListingDetails(listingId, (err, results) => {
    res.send(err || results);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;