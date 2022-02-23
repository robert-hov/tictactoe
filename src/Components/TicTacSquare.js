import React from "react";
import styled from "styled-components";

const TicTacSquare = ({index, clickHandler, squares}) => {
    return (
        <>
            <StyledTicTacItem
                onClick={() => {
                    clickHandler(index)
                }}
            >
                <StyledXO>
                    {squares[index]}
                </StyledXO>
            </StyledTicTacItem>
        </>
    )
}

export default TicTacSquare;

const StyledTicTacItem = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid mediumpurple;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
`

const StyledXO = styled.div`
  font-family: 'Akaya Telivigala', cursive;
  font-size: 1.5rem;
`