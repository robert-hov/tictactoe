import React, {useState} from "react";
import styled from "styled-components";
import SizeInput from "./Components/SizeInput";
import TicTacBoard from "./Components/TicTacBoard";

const App = () => {
    const [size, setSize] = useState(0)

    return (
        <StyledContainer>
            <SizeInput detectSize={size => {
                setSize(size)
            }}/>
            <TicTacBoard size={+size}/>
        </StyledContainer>
    )
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: black;
`
