import React from "react";
import styled from "styled-components";
import SizeInput from "./Components/SizeInput";

const App = () => {
    return (
        <StyledContainer>
            <SizeInput />
        </StyledContainer>
    )
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`