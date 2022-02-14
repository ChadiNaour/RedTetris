import React from "react";
import { StyledStartButton } from "./StyledStartButton";

const StartButoon = ({ callback }) => (
    <StyledStartButton onClick={callback}>
        Start game
        <div className="tt"></div>
    </StyledStartButton>
);

export default StartButoon;
