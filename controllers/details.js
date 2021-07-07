/*
 * Details Contol
*/
const db = require('../database/');
const path = require('path');
const promise = require('bluebird');

const ctrl = (module.exports = {});

ctrl.show = function(req, res) {
  const { listingId } = req.params;

  db.Detail.getListing(listingId)
    .then(function(listing) {
      res.json(listing);
    })
    .catch(function(err) {
      console.log(err);
    });
};

ctrl.create = function(req, res) {
  const { listingId } = req.params;
  console.log('posting');
};

ctrl.destroy = function(req, res) {
  const { listingId } = req.params;
  console.log('deleting');
};

ctrl.update = function(req, res) {
  const { listingId, highlightId } = req.params;
  const { feedback } = req.body;
};
