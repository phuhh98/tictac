import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';

import BoardCell from './BoardCell';

const { Content } = Layout;

function GameBoard(props: any) {
  const {
    player,
    playerMoveCount,
    board,
    PlayerMakeMove,
    MoveCountIncrement,
    ResetBoard,
    ResetGame,
  } = props;
  return (
    <Content>
      <Divider orientation="right">Game Board</Divider>
      <Row justify="center" align="middle">
        <Col span={20}>
          <button onClick={() => ResetBoard()}>Reset Board</button>
          <button onClick={() => ResetGame()}>Reset Game</button>

          <p>Move Count: {playerMoveCount}</p>

          <div>
            {board.map((rowVal: any[], index: Number) => (
              <Row key={'row' + index} justify="center" align="middle">
                <Col span={6}>
                  <BoardCell
                    playerCheckMark={player}
                    displayValue={rowVal[0]}
                    makeMove={PlayerMakeMove}
                    x={index}
                    y={0}
                    playerMoveCountIncrement={MoveCountIncrement}
                  />
                </Col>
                <Col span={6}>
                  <BoardCell
                    playerCheckMark={player}
                    displayValue={rowVal[1]}
                    makeMove={PlayerMakeMove}
                    x={index}
                    y={1}
                    playerMoveCountIncrement={MoveCountIncrement}
                  />
                </Col>
                <Col span={6}>
                  <BoardCell
                    playerCheckMark={player}
                    displayValue={rowVal[2]}
                    makeMove={PlayerMakeMove}
                    x={index}
                    y={2}
                    playerMoveCountIncrement={MoveCountIncrement}
                  />
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    </Content>
  );
}

export default GameBoard;
