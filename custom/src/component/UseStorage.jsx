import React, { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });


  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);


  const [sessionValue, setSessionValue] = useState(() => {
    const storedSessionValue = sessionStorage.getItem(key);
    return storedSessionValue !== null ? storedSessionValue : initialValue;
  });


  useEffect(() => {
    sessionStorage.setItem(key, sessionValue);
  }, [key, sessionValue]);

  return { value, setValue, sessionValue, setSessionValue };
};

function UseStorage() {
  const { value, setValue, sessionValue, setSessionValue } = useStorage('myInput', '');

  return (
    <div>
      <div className='main'>
      <label>
        Local Storage:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <br />
      <label>
        Session Storage:
        <input type="text" value={sessionValue} onChange={(e) => setSessionValue(e.target.value)} />
      </label>
      </div>
    </div>
  );
}

export default UseStorage;