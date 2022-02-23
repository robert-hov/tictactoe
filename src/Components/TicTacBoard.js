import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TicTacSquare from "./TicTacSquare"
import {click} from "@testing-library/user-event/dist/click";

const TicTacBoard = ({size}) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [length, setLength] = useState([]);
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

    const winnerCounter = () => {
        if(!winner()) return
        if(winner() === 'x') setXWins(xWins + 1)
        if(winner() === 'o') setOWins(oWins + 1)
    }

    const clickHandler = (i) => {
        if(winner()) return;
        const cloneLength = length;
        const cloneSquares = squares;

        if (cloneSquares[i]) return
        cloneSquares[i] = xTurn ? "x" : "x";
        setSquares(cloneSquares)
        console.log(cloneLength.length)

        setXturn(!xTurn);

        let randomI = 0;
        if(cloneLength.length === 4) return
        while(true) {
            randomI = Math.ceil((Math.random() * 9) - 1)
            if(!cloneSquares[randomI]) {
                cloneSquares[randomI] = 'o';
                cloneLength.push('o')
                break;
            }
        }
        setLength(cloneLength)

        setSquares(cloneSquares)
        winnerCounter();
        console.log(cloneLength.length)
    }

    return (
        <>
            {!draw() && !winner() && <StyledInfo>Now {xTurn ? 'x' : 'o'} turn</StyledInfo>}
            {winner() && <StyledWinner>Winner is {winner()}</StyledWinner>}
            {draw() && <StyledDraw>It's a draw</StyledDraw>}
            <StyledTicTacContainer size={size}>
                <TicTacSquare index={0} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={1} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={2} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={3} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={4} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={5} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={6} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={7} clickHandler={clickHandler} squares={squares}/>
                <TicTacSquare index={8} clickHandler={clickHandler} squares={squares}/>
            </StyledTicTacContainer>
            <StyledReset onClick={() => {
                setSquares(Array(9).fill(null))
                setLength([])
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

const StyledReset = styled.button`
  margin-top: 0.5rem;
`

const StyledWinners = styled.div`
  font-family: 'Akaya Telivigala', cursive;
`