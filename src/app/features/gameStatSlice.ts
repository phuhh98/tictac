import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  CheckMarkValue,
  WinLoose,
  Move,
  BoardValues,
  GameStat,
} from './interfaces';

const EMPTY_BOARD: BoardValues = [
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
  [CheckMarkValue.null, CheckMarkValue.null, CheckMarkValue.null],
];

const INIT_WIN_LOOSE: WinLoose = {
  winCount: 0,
  looseCount: 0,
};

const INITIAL_STATE: GameStat = {
  boardStat: EMPTY_BOARD,
  winLoose: INIT_WIN_LOOSE,
  playerMoveCount: 0,
};

export const gameStatSlice = createSlice({
  name: 'gameStat',
  initialState: INITIAL_STATE,
  reducers: {
    resetGame: () => INITIAL_STATE,
    resetBoard: state => {
      state.boardStat = EMPTY_BOARD;
    },
    winIncrement: state => {
      state.winLoose.winCount += 1;
    },
    looseIncrement: state => {
      state.winLoose.looseCount += 1;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  playerMakeMove,
  resetGame,
  resetBoard,
  winIncrement,
  moveCountIncrement,
  looseIncrement,
} = gameStatSlice.actions;

export default gameStatSlice.reducer;
