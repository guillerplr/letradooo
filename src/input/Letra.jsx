import React from 'react';
import styles from './Letra.module.css';

const Letra = ({ id, setValue, ...props }) => {
  return (
    <>
      <input
        id={id}
        name={id}
        onChange={({ target }) => {
          setValue(target.value);
          if (
            target.value != '' &&
            document.activeElement.nextSibling != null
          ) {
            document.activeElement.nextSibling.focus();
          }
        }}
        onKeyDown={(tecla) => {
          if (tecla.keyCode === 8 && tecla.target.value != '') {
            setValue('');
          } else if (
            tecla.keyCode === 8 &&
            tecla.target.value === '' &&
            document.activeElement.previousSibling != null
          ) {
            document.activeElement.previousSibling.focus();
          }
        }}
        maxLength="1"
        {...props}
      />
    </>
  );
};

export default Letra;
