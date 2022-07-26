import { useEffect } from 'react';
import './App.css';

import { Layout } from 'antd';

import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import GameBoard from './app/containers/GameBoard';
import SideMenu from './app/containers/SideMenu';

import {
  computerWinIncrement,
  playerMakeMove,
  playerWinIncrement,
  endGame,
} from './app/features/gameStatSlice';
import { Move } from './app/features/interfaces';
import { NextMove, IsGameEnded } from './utils/bot';

const { Header, Footer } = Layout;

function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {
  const computerLevel = useSelector(
    (state: RootState) => state.gameSettings.computerLevel
  );
  const board = useSelector((state: RootState) => state.gameStat.boardStat);
  const playerMoveCount = useSelector(
    (state: RootState) => state.gameStat.playerMoveCount
  );
  const computer = useSelector(
    (state: RootState) => state.gameSettings.computer
  );
  const player = useSelector((state: RootState) => state.gameSettings.player);
  const gameEnded = useSelector((state: RootState) => state.gameStat.gameEnded);
  console.log(gameEnded);

  const dispatch = useDispatch();
  useEffect(() => {
    async function computerMove() {
      await sleep(500);
      if (gameEnded) {
        return;
      }
      if (playerMoveCount === 0) {
        return;
      }
      const nextMove = NextMove(board.flat(1), player, computer, computerLevel);
      console.log('next move', nextMove);
      dispatch(
        playerMakeMove({
          value: computer,
          position: nextMove,
        } as Move)
      );
    }
    computerMove();
  }, [playerMoveCount]);
  useEffect(() => {
    function checkGameRes() {
      if (gameEnded) {
        return;
      }
      type GameResult = { winner: string | boolean };
      const res = IsGameEnded(board.flat(1), player, computer) as GameResult;
      if (!!res.winner) {
        dispatch(endGame());
        if (res.winner === player) {
          dispatch(playerWinIncrement());
        } else if (res.winner === computer) {
          dispatch(computerWinIncrement());
        }
        setTimeout(() => {
          if (res.winner === 'Draw') {
            alert(`Draw`);
          }
          alert(`${res.winner === 'X' ? 'Computer' : 'You'} won`);
        }, 500);
      }
    }
    checkGameRes();
  }, [board]);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu disabled={playerMoveCount > 0 ? true : false} />
        <Layout className="site-layout">
          <Header
            style={{ color: 'white', textAlign: 'center', padding: 0 }}
            className="site-layout-background"
          >
            Tic Tac Toe The Game
          </Header>
          <GameBoard />
          <Footer
            style={{ textAlign: 'center', color: 'white' }}
            className="site-layout-background"
          >
            Credot ...
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
