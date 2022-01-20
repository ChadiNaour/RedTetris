import React from "react";
import { StyledStartButton } from "./StyledStartButton";

const StartButoon = ({ callback }) => (
    <StyledStartButton onClick={callback}>Start game</StyledStartButton >
)

export default StartButoon;