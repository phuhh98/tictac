import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import GameBoard from '../../components/GameBoard/GameBoard';

import {
  playerMakeMove,
  resetBoard,
  resetGame,
  moveCountIncrement,
} from '../../app/features/gameStatSlice';

const mapStateToProps = (state: any) => ({
  player: state.gameSettings.player,
  playerMoveCount: state.gameStat.playerMoveCount,
  board: state.gameStat.boardStat,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  PlayerMakeMove: (val: any) => dispatch(playerMakeMove(val)),
  MoveCountIncrement: () => dispatch(moveCountIncrement()),
  ResetBoard: () => dispatch(resetBoard()),
  ResetGame: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
