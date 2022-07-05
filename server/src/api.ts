import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';

dotenv.config({
  path: '.env'
});

const access_key = process.env.RAPYD_ACCESS_KEY_SANDBOX || "";
const secret_key = process.env.RAPYD_SECRET_KEY_SANDBOX || "";

export async function callRapydAPI(http_method: string, url_path: string, body="") {

  const salt = crypto.randomBytes(12).toString();
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();

  const headers = {
    "Content-Type": `application/json`,
    access_key: access_key,
    salt: salt,
    timestamp: timestamp,
    signature: get_signature(salt, timestamp, url_path, http_method, body),
  };

  const fetch_API = async () => {
    try {
      const res = await axios.get(
        `https://sandboxapi.rapyd.net/v1` + url_path, {
        headers: headers,
      }).then(res => console.log(res));

      return res;
    }
    catch (error: any) {
      if (error.response) {
        console.log(error.response)
      }
    }
  }
  return await fetch_API();
}

function get_signature(
    salt: string,
    timestamp: string,
    urlPath: string,
    http_method: string,
    data: string,
    ): string {

    const to_sign = http_method + urlPath + salt + timestamp + access_key + secret_key + data;

    const hash = crypto.createHmac('sha256', secret_key).update(to_sign).digest('hex');
    const signature = Buffer.from(hash).toString('base64');

    return signature;
}
