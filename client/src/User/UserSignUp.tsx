import React, { useEffect } from 'react';
import axios from 'axios';

export function UserSignUp() {
  let test = "hihihi";

  useEffect(() => {
    axios.get('/wallet')
      .then(res => { test = res.data.wallet })
      .then(res => {
        console.log('Output: ', res);
        console.log(test)
      });
  }, []);

  return (
    <div>
      Sign up page
    </div>
  );
}

