import React, { useState } from "react";
import { createStage, checkCollision } from '../../gameHelpers';

//styled component
import { StyledTetrisWrapper, StyledTetris } from './StyledTetris';

//custom  hooks
import { useInterval } from '../../hooks/useInterval';
import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';

//components
import Stage from '../Stage/Stage';
import Display from '../Display/Display';
import StartButton from '../StartButton/StartButton';

const Tetris = (props) => {
    const { text } = props;
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);
    console.log("the game over i the tetris", gameOver)
    // console.log("re-render");
    //left and right movements
    const movePlayer = dir => {
        // console.log("before", player)
        if (!checkCollision(player, stage, { x: dir, y: 0 }))
            updatePlayerPos({ x: dir, y: 0 });
        // console.log("after", player)
    }
    const startGame = () => {
        //reset everything
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }
    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 }))
            updatePlayerPos({ x: 0, y: 1, collided: false });
        else {
            //game over !!!
            if (player.pos.y < 1) {
                console.log("GameOver!!!!!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }
    const dropPlayer = () => {
        drop();
    }
    const move = ({ keyCode }) => {
        // console.log("in here", keyCode);
        if (!gameOver) {
            if (keyCode === 37) //left key
                movePlayer(-1);
            else if (keyCode === 39) //right key
                movePlayer(1);
            else if (keyCode === 40) //down key
                dropPlayer(1);
            else if (keyCode === 38) //up key
                playerRotate(stage, 1);
        }

    }

    // useInterval(() => {
    //     drop();
    // });

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? <Display gameOver={gameOver} text="Game Over" /> :
                        <div>
                            <Display text="Score :" />
                            <Display text="Rows :" />
                            <Display text="Level :" />
                            <Display text="Mode : Solo" />
                        </div>
                    }
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;