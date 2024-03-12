import React from 'react';
import styles from './Game.module.css';
import Letra from './input/Letra';
import Palavra from './input/Palavra';

const Game = () => {
  return (
    <section className={styles.container}>
      <form>
        <Palavra />
        <Palavra />
        <Palavra />
        <Palavra />
        <Palavra />
      </form>
    </section>
  );
};

export default Game;
