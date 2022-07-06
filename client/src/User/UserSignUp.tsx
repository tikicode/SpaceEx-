import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function UserSignUp() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get('/wallet')
      .then(res => res.data)
      .then(res => {
        console.log('Output: ', res);
      });
  }, []);

  return (
    <form onSubmit={() => { 
      console.log(name);
      alert(name);
    }}>
      <label>
        First Name:
        <input
          type="text"
          name="First Name"
          onChange={e => {
            setName(e.target.value)
          }}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="Last Name"
          onChange={e => {
            setName(e.target.value)
          }}
        />
      </label>
      <input 
        type="submit"
        value="Submit"
      />
    </form>
  );
}

