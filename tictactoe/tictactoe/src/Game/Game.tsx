import { useState } from 'react';
import Square from '../Square/Square.js';
import { INITIAL_GAME_STATE } from '../utils/tempData.js';

const Game = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const handleCellClick = (e: any) => {
    console.log('clicked', e.target.getAttribute('data-cell-index'));
  };
  return (
    <main>
      <h1>Game</h1>
      <div className='main'>
        <div className='board'>
          {gameState.map((player, I) => (
            <Square key={I} {...{ player, I }} handleClick={handleCellClick} />
          ))}
        </div>
      </div>
      <div>Scores go here</div>
    </main>
  );
};

export default Game;
