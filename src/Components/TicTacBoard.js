import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TicTacSquare from "./TicTacSquare"

const TicTacBoard = ({size = 3}) => {
    const [squares, setSquares] = useState(Array(size).fill(null));
    const [length, setLength] = useState([]);
    const [xTurn, setXturn] = useState(true)
    const [xWins, setXWins] = useState(0)
    const [oWins, setOWins] = useState(0)

    function calcWinner(num) {
        const arr = Array(num ** 2).fill(0).map((_, i) => i);
        const arrHorizon = () => {
            const array = []
            for (let i = 0; i < num; i++) {
                array[i] = arr.slice(num * i, num * (i + 1))
            }
            return array.flat(0)
        }
        const arrVertical = () => {
            const array = [];
            for (let i = 0; i < num; i++) {
                array[i] = []
                for (let j = 0; j < num; j++) {
                    array[i].push((num * j) + i)
                }
            }

            return array;
        }
        const leftToRight = () => {
            const array = []
            for (let i = 0; i < num; i++) {
                array[i] = (num * i) + i
            }
            return array;
        }
        const rightToLeft = () => {
            const array = []
            for (let i = 1; i <= num; i++) {
                array[i - 1] = num * i - i
            }
            return array;
        }
        const bigArr = [
            ...arrHorizon(),
            ...arrVertical(),
            leftToRight(),
            rightToLeft()
        ]
        return bigArr;
    }

    const winner = () => {
        const winners = calcWinner(size);

        let checkin = [];
        for (let i = 0; i < winners.length; i++) {
            for (let j = 0; j < size; j++) {
                if (squares[winners[i][1]] && squares[winners[i][j]] === squares[winners[i][1]]) {
                    checkin.push('')
                }
                if (checkin.length >= size) return squares[winners[i][1]]
            }
            checkin = []
        }
        return null
    }

    const draw = () => {
        if (winner()) return
        let counter = 0;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i]) counter++
        }
        if (counter === size ** 2) return true
        return null
    }

    const winnerCounter = () => {
        if (!winner()) return
        if (winner() === 'x') setXWins(xWins + 1)
        if (winner() === 'o') setOWins(oWins + 1)
    }

    const reset = () => {
        setSquares(Array(9).fill(null))
        setLength([])
    }

    useEffect(() => {
        reset();
    }, [size])

    const clickHandler = (i) => {
        if (winner()) return;
        const cloneLength = length;
        const cloneSquares = squares;

        if (cloneSquares[i]) return
        cloneSquares[i] = xTurn ? "x" : "x";
        setSquares(cloneSquares)

        setXturn(!xTurn);

        let randomI = 0;
        winnerCounter();
        if (winner()) return;
        while (true) {
            randomI = Math.ceil((Math.random() * size ** 2) - 1)
            if (!cloneSquares[randomI]) {
                cloneSquares[randomI] = 'o';
                cloneLength.push('o')
                console.log((cloneLength.length))
                if (cloneLength.length === Math.floor((size ** 2 )/ 2)) return
                break;
            }
        }
        setLength(cloneLength)

        setSquares(cloneSquares)
        winnerCounter();

    }

    const renderItems = () => {
        const items = [];
        for (let i = 0; i < size ** 2; i++) {
            items.push(<TicTacSquare key={i} size={size} index={i} clickHandler={clickHandler} squares={squares}/>)
        }
        // setSquares(items);
        return items;
    }

    return (
        <>
            {!draw() && !winner() && <StyledInfo>Good Luck</StyledInfo>}
            {winner() === 'o' ?  <StyledWinner>Winner is {winner()}</StyledWinner> : winner() === 'x' ? <StyledWinner>You Won 🤘</StyledWinner> : ''}
            {draw() && squares[1] && <StyledDraw>It's a draw</StyledDraw>}
            <StyledTicTacContainer size={size}>
                {renderItems()}
            </StyledTicTacContainer>
            <StyledReset onClick={reset}>Reset</StyledReset>
            <StyledWinners>X: {xWins} | O: {oWins} </StyledWinners>
        </>
    )
}

export default TicTacBoard;

const StyledTicTacContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.2rem;
  width: ${({size}) => size > 10 ? size * 20 : size > 5 ? size * 25 : size ? size * 50 : ''}px;
`


const StyledInfo = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
  line-height: 32.8px;

  color: white;
`

const StyledWinner = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
  line-height: 32.8px;
  color: forestgreen;
`

const StyledDraw = styled.h2`
  font-family: 'Roboto Serif', sans-serif;
  line-height: 32.8px;

  color: midnightblue;
`

const StyledReset = styled.button`
  margin-top: 0.5rem;
`

const StyledWinners = styled.div`
  font-family: 'Akaya Telivigala', cursive;
  color: white;
`