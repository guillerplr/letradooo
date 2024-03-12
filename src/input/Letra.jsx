import React from 'react';
import styles from './Letra.module.css';

const Letra = ({ id, setValue, ...props }) => {
  return (
    <>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        maxLength="1"
        {...props}
      />
    </>
  );
};

export default Letra;
