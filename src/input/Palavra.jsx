import React from 'react';
import Letra from './Letra';

const Palavra = () => {
  const [letra1, setLetra1] = React.useState('');
  const [letra2, setLetra2] = React.useState('');
  const [letra3, setLetra3] = React.useState('');
  const [letra4, setLetra4] = React.useState('');
  const [letra5, setLetra5] = React.useState('');
  return (
    <div>
      <Letra id="letra1" type="text" value={letra1} setValue={setLetra1} />
      <Letra id="letra1" type="text" value={letra2} setValue={setLetra2} />
      <Letra id="letra1" type="text" value={letra3} setValue={setLetra3} />
      <Letra id="letra1" type="text" value={letra4} setValue={setLetra4} />
      <Letra id="letra1" type="text" value={letra5} setValue={setLetra5} />
    </div>
  );
};

export default Palavra;
