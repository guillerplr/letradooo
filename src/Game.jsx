import React from 'react';
import styles from './Game.module.css';
import Letra from './input/Letra';
import Palavra from './input/Palavra';

const Game = () => {
  function handleSubmit() {
    console.log('foi');
  }

  return (
    <section className={styles.container} onSubmit={handleSubmit}>
      <Palavra classe />
      <Palavra disabled />
      <Palavra disabled />
      <Palavra disabled />
      <Palavra disabled />
    </section>
  );
};

export default Game;
