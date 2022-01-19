import React from "react";
import { createStage } from '../../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './StyledTetris';
//components
import Stage from '../Stage/Stage';
import Display from '../Display/Display';
import StartButton from '../StartButton/StartButton';

const Tetris = (props) => {
    const { text } = props;
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={ createStage() } />
            <aside>
                    <Display text="Score:" />
                    <Display text="Rows:" />
                    <Display text="Level:" />
                    <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;