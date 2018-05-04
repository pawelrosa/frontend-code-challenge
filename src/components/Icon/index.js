import React from 'react';
import { COLOR_HOT_STONE } from '../../constants/colors';
import { ICONS } from './constants';
import { calculateSize, getPathFill } from './helpers';
import { Path } from './styles';

const Icon = ({ className, color, inheritColor, name, size, viewBox }) => {
  const [width, height] = calculateSize(size, viewBox);

  if (!width || !height) { return null; }

  return (
    <svg
      className={className}
      height={height}
      viewBox={viewBox}
      width={width}
    >
      {ICONS[name].map((pathData, index) => (
        <Path
          d={pathData}
          fillColor={inheritColor ? 'inherit' : getPathFill(color, index)}
          key={index}
        />
      ))}
    </svg>
  );
};

Icon.defaultProps = {
  className: '',
  color: COLOR_HOT_STONE,
  inheritColor: false,
  size: 48,
  viewBox: '0 0 32 32',
};

export default Icon;
