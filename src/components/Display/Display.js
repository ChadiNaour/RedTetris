import React from "react";
import { StyledDisplay } from './StyledDisplay';

const Display = (props) => {
    const { text, gameOver } = props;
    return (
        <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay >
    )
}

export default Display;