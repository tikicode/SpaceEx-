import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';

dotenv.config({
  path: '.env'
});

const accessKey = process.env.RAPYD_ACCESS_KEY_SANDBOX || "EMPTY";
const secretKey = process.env.RAPYD_SECRET_KEY_SANDBOX || "EMPTY";
const baseUrl = `https://sandboxapi.rapyd.net`;

/**
 *
 * @param httpMethod The http method call you're making – GET, PUT, POST, etc...
 * @param apiUrl Rapyd API URL to be called- Ex: /v1/data/countries
 * @param body Any data to be passed into the Rapyd API call
 * @returns The data response from Rapyd API
 */
export async function callRapydApi(httpMethod, apiUrl, data="") {
  data = (data == "" || data == "{}") ? "" : JSON.stringify(data);

  const salt = crypto.randomBytes(12).toString('hex');
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();
  const signature = getSignature(salt, timestamp, apiUrl, httpMethod, data);

  const headers = {
    "Content-Type": `application/json`,
    access_key: accessKey,
    salt: salt,
    timestamp: timestamp,
    signature: signature,
  };

  const options = {
    headers: headers,
    method: httpMethod,
    baseURL: baseUrl,
    url: apiUrl,
    data: data,
  }

  console.log(options);

  const fetchApi = async () => {
    try {
      const res = await axios(options);
      return res.data;

    } catch (error) {
      if (error.response) {
        return error.response.data;
      }

      return error;
    }
  }

  return await fetchApi();
}

function getSignature(salt, timestamp, urlPath, httpMethod, data) {
    
    if (accessKey == "EMPTY" || secretKey == "EMPTY") {
      throw new Error("Rapyd access or secret key is empty!")
    }

    const to_sign = httpMethod + urlPath + salt + timestamp + accessKey + secretKey + data;

    const hash = crypto.createHmac('sha256', secretKey).update(to_sign).digest('hex');
    const signature = Buffer.from(hash).toString('base64');

    return signature;
}
