import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  CheckMarkValue,
  BoardDemension,
  GameSettings,
  Difficulty,
} from './interfaces';

const INITIAL_STATE: GameSettings = {
  boardDemension: {
    width: 3,
    height: 3,
  },
  player: CheckMarkValue.O,
  computer: CheckMarkValue.X,
  computerLevel: Difficulty.Easy,
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
    setPlayerMove: (state, action: PayloadAction<CheckMarkValue>) => {
      state.player = action.payload;
      if (action.payload === CheckMarkValue.O) {
        state.computer = CheckMarkValue.X;
      } else {
        state.computer = CheckMarkValue.O;
      }
    },
    setComputerLevel: (state, action: PayloadAction<Difficulty>) => {
      state.computerLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, setPlayerSymbol, setPlayerMove, setComputerLevel } =
  gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
