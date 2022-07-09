import { FC } from 'react';
import { sizes } from '../utils/data.js';

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
      {sizes.map((el: string) => (
        <button
          key={el}
          className={selectedSize === el ? 'active' : ''}
          onClick={() => onSizeChange(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
