/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns string - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  const positions = [
    { name: 'top', value: index < boardSize },
    { name: 'bottom', value: index >= boardSize * boardSize - boardSize },
    { name: 'right', value: (index + 1) % boardSize === 0 },
    { name: 'left', value: index % boardSize === 0 },
  ];

  const position = positions.filter(pos => pos.value).map(pos => pos.name);

  if (position.length > 0) {
    return position.join('-');
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
