import React, {useState} from "react";
import styled from "styled-components";

const SizeInput = () => {
    const [size, setSize] = useState(0);
    return(
        <StyledForm>
            <StyledInput onChange={e => setSize(e.target.value)} value={size} type={"number"} />
        </StyledForm>
    )
}

export default SizeInput;

const StyledForm = styled.form`
   
`

const StyledInput = styled.input`
  width: 5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
`