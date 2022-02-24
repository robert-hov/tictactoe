import React from "react";
import styled from "styled-components";

const TicTacSquare = ({index, clickHandler, squares, size}) => {
    return (
        <StyledTicTacItem
            size={size}
            onClick={() => {
                clickHandler(index)
            }}
        >
            <StyledXO size={size}>
                {squares[index]}
            </StyledXO>
        </StyledTicTacItem>
    )
}

export default TicTacSquare;

const StyledTicTacItem = styled.button`
  position: relative;
  width: ${({size}) => size > 10 ? 20 : size > 5 ? 25 : size ? '50' : ''}px;
  height: ${({size}) => size > 10 ? 20 : size > 5 ? 25 : size ? '50' : ''}px;
  border: 1px solid mediumpurple;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
`

const StyledXO = styled.div`
  font-family: 'Akaya Telivigala', cursive;
  font-size: ${({size}) => size > 10 ? 0.9 : size > 5 ? 1.3 : size ? 1.5 : ''}rem;
  line-height: 1;
`