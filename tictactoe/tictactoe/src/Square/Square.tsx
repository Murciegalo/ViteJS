import { ReactNode } from 'react';

type Props = {
  player: ReactNode;
};

const Square = ({ player }: Props) => {
  // const scale = player ? 'scale-100' : 'scale-0';
  // const textColor = player === 'X' ? 'text-yellow-200' : 'text-fuchsia-300';
  // const hoverStyle = "transition duration-500 hover:scale-105 transform"

  return (
    <div className='listItem'>
      <span>{player}</span>{' '}
    </div>
  );
};

export default Square;
