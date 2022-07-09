import { useState } from 'react';
import { INITIAL_GAME_STATE } from '../utils/tempData.js';

const Game = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  return (
    <main>
      <h1>Game</h1>
      <div className='main'>
        <div className='board'>
          {gameState.map((el: string, key: string) => (
            <div key={key} className='listItem'>
              {el}
            </div>
          ))}
        </div>
      </div>
      <div>Scores go here</div>
    </main>
  );
};

export default Game;
