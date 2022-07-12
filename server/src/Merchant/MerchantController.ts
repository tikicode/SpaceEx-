import { Response, Request } from 'express';
import dotenv from 'dotenv';
//import { callRapydApi } from '../api';
import axios from 'axios';

dotenv.config({
  path: '.env'
});

const mongo_base_url = 'https://data.mongodb-api.com/app/data-ghpdx/endpoint/data/v1/insertOne';
const mongo_api_key = process.env.MONGO_API_KEY || '';

export function createMerchant (req: Request, res: Response) {
  const headers = {
    "Content-Type": `application/json`,
    "api-key": mongo_api_key,
  };

  const data = {
    dataSource: 'Cluster0',
    dataBase: 'Payload',
    collection: 'Merchants',
    document: req.body,
  }

  const options = {
    headers: headers,
    method: 'post',
    baseURL: mongo_base_url,
    url: '/insertOne',
    data: data,
  }

  const queryMongo = async () => {
    try {
      await axios(options).then(result => {
        console.log("WORK");
        res.send(result);
      });

    } catch (error: any) {
      if (error.response) {
        res.send(error.response.data);
      }
    }
  }

  queryMongo();
}


