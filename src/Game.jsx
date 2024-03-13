import React from 'react';
import styles from './Game.module.css';
import Letra from './input/Letra';
import Palavra from './input/Palavra';

const Game = () => {
  return (
    <section className={styles.container}>
      <form>
        <Palavra classe="ativo" />
        <Palavra disabled />
        <Palavra disabled />
        <Palavra disabled />
        <Palavra disabled />
      </form>
    </section>
  );
};

export default Game;
