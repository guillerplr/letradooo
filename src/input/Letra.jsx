import React from 'react';
import styles from './Letra.module.css';

const Letra = ({ id, setValue, ...props }) => {
  return (
    <>
      <input
        {...props}
        autoComplete="off"
        id={id}
        name={id}
        onKeyDown={(tecla) => {
          switch (tecla.keyCode) {
            case 13:
              tecla.preventDefault();
              console.log('faz a função!');
              break;
            case 46:
            case 8:
              tecla.preventDefault();
              setValue('');
              if (document.activeElement.previousSibling != null) {
                document.activeElement.previousSibling.focus();
              }
              break;
            case 37:
              tecla.preventDefault();
              if (document.activeElement.previousSibling != null) {
                document.activeElement.previousSibling.focus();
              }
              break;
            case 39:
              tecla.preventDefault();

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
