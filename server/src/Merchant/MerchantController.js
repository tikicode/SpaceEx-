import { Response, Request } from 'express';
import dotenv from 'dotenv';
//import { callRapydApi } from '../api';
import { connectToDB } from '../database';
import { Db, ObjectId } from 'mongodb';

dotenv.config({
  path: '.env'
});

let db;

connectToDB().then(database => db = database);

export function createMerchant (req, res) {

  const merchantDocument = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    company: req.body.company,
  }

  db
  .collection('Merchants')
  .insertOne(merchantDocument, (err, result) => {
    if (err) {
      res.status(400).send('Error inserting matches!');

    }
    else {
      console.log(`Added a new match with id ${result?.insertedId}`);

      res.status(204).send(result);
    }
  });
}

export function deleteMerchant (req, res) {
  const id = {
    "_id": new ObjectId(req.body.id)
  };
  db
  .collection('Merchants')
  .deleteOne(id, (err, result) => {
    if (err) {
      res.status(400).send('Error inserting matches!');
    }
    else {
      console.log(`Deleted merchant with id ${result?.acknowledged}`);

      res.status(204).send(result);
    }
  });
}


