import React from "react";
import {StyledCell} from './StyledCell';
import {TETROMINOS} from '../../tetrominos'

const Cell = (props) => {
    const {type} = props;

    return (
        <StyledCell type={type} color={TETROMINOS[type].color} />
    )
}

export default Cell;