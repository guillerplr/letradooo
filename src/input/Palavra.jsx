import React from 'react';
import Letra from './Letra';
import styles from './Palavra.module.css';

const Palavra = ({ classe, ...props }) => {
  const [letra1, setLetra1] = React.useState('');
  const [letra2, setLetra2] = React.useState('');
  const [letra3, setLetra3] = React.useState('');
  const [letra4, setLetra4] = React.useState('');
  const [letra5, setLetra5] = React.useState('');

  return (
    <div
      className={
        classe
          ? `${styles.palavra} ${styles.outro}`
          : `${styles.teste} ${styles.outro}`
      }
    >
      <Letra
        id="letra1"
        type="text"
        value={letra1}
        setValue={setLetra1}
        {...props}
      />
      <Letra
        id="letra2"
        type="text"
        value={letra2}
        setValue={setLetra2}
        {...props}
      />
      <Letra
        id="letra3"
        type="text"
        value={letra3}
        setValue={setLetra3}
        {...props}
      />
      <Letra
        id="letra4"
        type="text"
        value={letra4}
        setValue={setLetra4}
        {...props}
      />
      <Letra
        id="letra5"
        type="text"
        value={letra5}
        setValue={setLetra5}
        {...props}
      />
    </div>
  );
};
export default Palavra;
