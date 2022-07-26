export enum CheckMarkValue {
  O = 'O',
  X = 'X',
  null = '_',
}

export interface BoardDemension {
  width: number;
  height: number;
}

export type WinPoints = 3 | 4 | 5;

export enum Difficulty {
  Easy = 'Easy',
  Normal = 'Normal',
  Hard = 'Hard',
}

export interface GameSettings {
  boardDemension: BoardDemension;
  player: CheckMarkValue;
  computer: CheckMarkValue;
  computerLevel: Difficulty;
}

export interface WinCount {
  player: number;
  computer: number;
}

export type BoardValues = CheckMarkValue[][] | any[][];

export interface GameStat {
  boardStat: BoardValues;
  winCount: WinCount;
  playerMoveCount: number;
  gameEnded: boolean;
}

export interface Move {
  value: CheckMarkValue;
  position: {
    x: number;
    y: number;
  };
}
