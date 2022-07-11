type Props = {
  I: string;
  player?: string;
  handleClick(e: any): void;
};

const Square = ({ player, I, handleClick }: Props) => {
  console.log('DATA');
  // const scale = player ? 'scale-100' : 'scale-0';
  // const textColor = player === 'X' ? 'text-yellow-200' : 'text-fuchsia-300';
  // const hoverStyle = "transition duration-500 hover:scale-105 transform"

  return (
    <div className='listItem' data-cell-index={I} onClick={handleClick}>
      <span data-cell-index={I}>{player}</span>{' '}
    </div>
  );
};

export default Square;
