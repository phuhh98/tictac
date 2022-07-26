import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  CheckMarkValue,
  WinCount,
  Move,
  BoardValues,
  GameStat,
} from './interfaces';
import { strictEqual } from 'assert';

const EMPTY_BOARD: BoardValues = [
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
];

const INIT_WIN_LOOSE: WinCount = {
  player: 0,
  computer: 0,
};

const INITIAL_STATE: GameStat = {
  boardStat: EMPTY_BOARD,
  winCount: INIT_WIN_LOOSE,
  playerMoveCount: 0,
  gameEnded: false,
};

export const gameStatSlice = createSlice({
  name: 'gameStat',
  initialState: INITIAL_STATE,
  reducers: {
    resetGame: () => INITIAL_STATE,
    resetBoard: state => {
      state.boardStat = EMPTY_BOARD;
      state.playerMoveCount = 0;
      state.gameEnded = false;
    },
    playerWinIncrement: state => {
      state.winCount.player += 1;
    },
    computerWinIncrement: state => {
      state.winCount.computer += 1;
    },
    moveCountIncrement: state => {
      state.playerMoveCount += 1;
    },
    playerMakeMove: (state, action: PayloadAction<Move>) => {
      const x = action.payload.position.x;
      const y = action.payload.position.y;
      const value = action.payload.value;
      if (state.boardStat[x][y] !== CheckMarkValue.null) {
        alert('Invalid move');
        throw new Error('Invalid move');
      }
      state.boardStat[x][y] = value;
    },
    endGame: state => {
      state.gameEnded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  playerMakeMove,
  resetGame,
  resetBoard,
  playerWinIncrement,
  moveCountIncrement,
  computerWinIncrement,
  endGame,
} = gameStatSlice.actions;

export default gameStatSlice.reducer;
