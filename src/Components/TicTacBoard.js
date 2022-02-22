import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {click} from "@testing-library/user-event/dist/click";

const TicTacBoard = ({size}) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xTurn, setXturn] = useState(true)
    const [xWins, setXWins] = useState(0)
    const [oWins, setOWins] = useState(0)

    const winner = () => {
        const winners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winners.length; i++) {
            const [one, two, three] = winners[i];
            if (squares[one] && squares[one] === squares[two] && squares[one] === squares[three]) {
                return squares[one]
            }
        }
        return null;
    }

    const draw = () => {
        if (winner()) return
        let counter = 0;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i]) counter++
        }
        if (counter === 9) return true
        return null
    }

    const clickHandler = (i) => {
        const cloneSquares = squares;

        if (cloneSquares[i]) return
        cloneSquares[i] = xTurn ? "x" : "o";

        setXturn(!xTurn);
        setSquares(cloneSquares)
        winnerCounter();
    }



    const winnerCounter = () => {
        if(!winner()) return
        if(winner() === 'x') setXWins(xWins + 1)
        if(winner() === 'o') setOWins(oWins + 1)
    }

    const TicTacItem = (i) => {
        return (
            <>
                <StyledTicTacItem
                    data-num={i}
                    onClick={() => {
                        if (winner()) return
                        clickHandler(i)
                    }}
                >
                    <StyledXO>
                        {squares[i]}
                    </StyledXO>
                </StyledTicTacItem>
            </>
        )
    }

    return (
        <>
            {!draw() && !winner() && <StyledInfo>Now {xTurn ? 'x' : 'o'} turn</StyledInfo>}
            {winner() && <StyledWinner>Winner is {winner()}</StyledWinner>}
            {draw() && <StyledDraw>It's a draw</StyledDraw>}
            <StyledTicTacContainer size={size}>
                {TicTacItem(0)}
                {TicTacItem(1)}
                {TicTacItem(2)}
                {TicTacItem(3)}
                {TicTacItem(4)}
                {TicTacItem(5)}
                {TicTacItem(6)}
                {TicTacItem(7)}
                {TicTacItem(8)}
            </StyledTicTacContainer>
            <StyledReset onClick={() => {
                setSquares(Array(9).fill(null))
            }}>Reset</StyledReset>
            <StyledWinners>X: {xWins} | O: {oWins} </StyledWinners>
        </>
    )
}

export default TicTacBoard;

const StyledTicTacContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
  width: 150px;

`

const StyledTicTacItem = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid mediumpurple;
  box-sizing: border-box;
  cursor: pointer;
  background-color: transparent;
`

const StyledInfo = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
`

const StyledWinner = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
  color: forestgreen;
`

const StyledDraw = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
  color: midnightblue;
`

const StyledXO = styled.div`
  font-family: 'Akaya Telivigala', cursive;
  font-size: 1.5rem;
`

const StyledReset = styled.button`
  margin-top: 0.5rem;
`

const StyledWinners = styled.div`
  font-family: 'Akaya Telivigala', cursive;

`