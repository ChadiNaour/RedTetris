import React from "react";
import { StyledStage } from './StyledStage';
import Cell from '../Cell/Cell';

const Stage = (props) => {
    const {stage} = props;
    // console.log("stage is",stage)
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell, x) => <Cell key = {x} type={cell[0]} />))}
        </StyledStage>
    )
}

export default Stage;