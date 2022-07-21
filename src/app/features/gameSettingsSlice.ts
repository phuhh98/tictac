import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  CheckMarkValue,
  BoardDemension,
  WinPoints,
  GameSettings,
} from './interfaces';

const INITIAL_STATE: GameSettings = {
  boardDemension: {
    width: 3,
    height: 3,
  },
  player: CheckMarkValue.O,
  computer: CheckMarkValue.X,
  winPoints: 3,
};

export const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState: INITIAL_STATE,
  reducers: {
    setBoard: (state, action: PayloadAction<BoardDemension>) => {
      state.boardDemension = action.payload;
    },
    setPlayerSymbol: (state, action: PayloadAction<CheckMarkValue>) => {
      state.player = action.payload;
    },
    setWinPoints: (state, action: PayloadAction<WinPoints>) => {
      state.winPoints = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, setPlayerSymbol, setWinPoints } =
  gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
