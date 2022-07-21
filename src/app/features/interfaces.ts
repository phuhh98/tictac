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

export interface GameSettings {
  boardDemension: BoardDemension;
  player: CheckMarkValue;
  computer: CheckMarkValue;
  winPoints: WinPoints;
}

export interface WinLoose {
  winCount: number;
  looseCount: number;
}

export type BoardValues = CheckMarkValue[][] | any[][];

export interface GameStat {
  boardStat: BoardValues;
  winLoose: WinLoose;
  playerMoveCount: number;
}

export interface Move {
  value: CheckMarkValue;
  position: {
    x: number;
    y: number;
  };
}
