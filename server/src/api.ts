import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';

dotenv.config({
  path: '.env'
});

const access_key = process.env.RAPYD_ACCESS_KEY_SANDBOX || "EMPTY";
const secret_key = process.env.RAPYD_SECRET_KEY_SANDBOX || "EMPTY";
const base_url = `https://sandboxapi.rapyd.net`;

export async function call_rapyd_api(http_method: string, api_url: string, body="") {
  const salt = crypto.randomBytes(12).toString('hex');
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();

  const headers = {
    "Content-Type": `application/json`,
    access_key: access_key,
    salt: salt,
    timestamp: timestamp,
    signature: get_signature(salt, timestamp, api_url, http_method, body),
  };

  const fetch_api = async () => {
    try {
      const res = await axios.get(
        base_url + api_url, {
        headers: headers,
      })
      return res;
    }
    catch (error: any) {
      if (error.response) {
        console.log(error.response)
        return error.response;
      }
      return error;
    }
  }
  return await fetch_api();
}

function get_signature(salt: string, timestamp: string, url_path: string, http_method: string, data: string): string {
    
    if (access_key == "EMPTY" || secret_key == "EMPTY") {
      throw new Error("Rapyd access or secret key is empty!")
    }

    const to_sign = http_method + url_path + salt + timestamp + access_key + secret_key + data;

    const hash = crypto.createHmac('sha256', secret_key).update(to_sign).digest('hex');
    const signature = Buffer.from(hash).toString('base64');

    return signature;
}
