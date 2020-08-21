import React from "react";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from "../styled/Game";

export default function Game() {
  return (
    <StyledGame>
      <StyledScore>Score: 8</StyledScore>
      <StyledCharacter>A</StyledCharacter>
      <StyledTimer>Timer: 5s</StyledTimer>
    </StyledGame>
  );
}
