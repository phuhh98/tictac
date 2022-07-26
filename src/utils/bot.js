import { Difficulty } from '../app/features/interfaces';

import Minimax from 'tic-tac-toe-minimax';
import AIHelpers from 'tic-tac-toe-minimax/src/AIHelpers';
const { ComputerMove } = Minimax;

export function NextMove(board, huPlayer, aiPlayer, level) {
  const symbols = {
    huPlayer,
    aiPlayer,
  };
  if (!Difficulty[level]) {
    throw new Error('Wrong level for Difficulty. Only : Easy | Normal | Hard');
  }
  const flatBoard = board.map((value, index) =>
    value !== huPlayer && value !== aiPlayer ? index : value
  );
  const index = ComputerMove(flatBoard, symbols, level);
  let nextMove = {};
  switch (index) {
    case 0:
      nextMove = { x: 0, y: 0 };
      break;
    case 1:
      nextMove = { x: 0, y: 1 };
      break;
    case 2:
      nextMove = { x: 0, y: 2 };
      break;
    case 3:
      nextMove = { x: 1, y: 0 };
      break;
    case 4:
      nextMove = { x: 1, y: 1 };
      break;
    case 5:
      nextMove = { x: 1, y: 2 };
      break;
    case 6:
      nextMove = { x: 2, y: 0 };
      break;
    case 7:
      nextMove = { x: 2, y: 1 };
      break;
    case 8:
      nextMove = { x: 2, y: 2 };
      break;
    default:
      throw new Error('wrong move');
  }
  return nextMove;
}

export function IsGameEnded(board, huPlayer, aiPlayer, level) {
  const symbols = {
    huPlayer,
    aiPlayer,
  };
  const computerWon = AIHelpers.playerWon(board, aiPlayer);
  const playerWon = AIHelpers.playerWon(board, huPlayer);
  const gameEnded = AIHelpers.isGameFinished(board, symbols);

  console.log(
    'gameEnded',
    gameEnded,
    'playeWon',
    playerWon,
    'compyterWon',
    computerWon
  );

  if (!gameEnded) {
    return { winner: null };
  } else {
    if (computerWon) {
      return { winner: aiPlayer };
    }
    if (playerWon) {
      return { winner: huPlayer };
    }
    return { winner: 'Draw' };
  }
}
