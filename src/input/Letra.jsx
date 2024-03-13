import React from 'react';
import styles from './Letra.module.css';

const Letra = ({ id, setValue, ...props }) => {
  return (
    <>
      <input
        {...props}
        id={id}
        name={id}
        onChange={(event) => {
          event.preventDefault();
          console.log(event);
          setValue(event.target.value);
          if (document.activeElement.nextSibling != null) {
            document.activeElement.nextSibling.focus();
          }
        }}
        onKeyDown={(tecla) => {
          tecla.preventDefault();
          switch (tecla.keyCode) {
            case 46:
            case 8:
              setValue('');
              if (document.activeElement.previousSibling != null) {
                document.activeElement.previousSibling.focus();
              }
              break;
            case 37:
              if (document.activeElement.previousSibling != null) {
                document.activeElement.previousSibling.focus();
              }
              break;
            case 39:
              if (document.activeElement.nextSibling != null)
                document.activeElement.nextSibling.focus();
              break;
            default:
              if (tecla.keyCode >= 65 && tecla.keyCode <= 90) {
                setValue(tecla.key);
                if (document.activeElement.nextSibling != null)
                  document.activeElement.nextSibling.focus();
              }
              break;
          }
        }}
        maxLength="1"
        {...props}
      />
    </>
  );
};

export default Letra;
