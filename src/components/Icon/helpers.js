import { get, last } from 'lodash';

export const getPathFill = (color, index = 0) =>
  Array.isArray(color) ? get(color, index, last(color)) : color;

export const calculateSize = (size, viewBox) => {
  // eslint-disable-next-line no-unused-vars
  const [_minX, _minY, width, height] = viewBox.split(' ').map((v) => Number(v));
  const svgWidth = size;
  const svgHeight = svgWidth / width * height;

  return [svgWidth, svgHeight];
};
