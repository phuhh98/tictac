import React from 'react';

import { CheckMarkValue } from '../../app/features/interfaces';

function BoardCell(props: IBoardCell) {
  const {
    displayValue,
    playerCheckMark,
    x,
    y,
    makeMove,
    playerMoveCountIncrement,
  } = props;
  return (
    <>
      <div
        style={{
          border: '1px solid red',
          backgroundColor: 'yellow',
          textAlign: 'center',
          height: '100px',
          lineHeight: '100px',
          fontWeight: 700,
          fontSize: '2rem',
        }}
        onClick={() => {
          makeMove({ value: playerCheckMark, position: { x, y } });
          playerMoveCountIncrement();
        }}
      >
        <span>{displayValue}</span>
      </div>
    </>
  );
}

interface IBoardCell {
  displayValue: CheckMarkValue;
  playerCheckMark: CheckMarkValue;
  x: Number;
  y: Number;
  makeMove(data: Object): any;
  playerMoveCountIncrement(): any;
}

export default BoardCell;
