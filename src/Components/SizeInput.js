import React, {useState} from "react";
import styled from "styled-components";

const SizeInput = ({detectSize}) => {
    const [size, setSize] = useState(3);
    return (
        <StyledInput
            onChange={e => {
                setSize(e.target.value);
                detectSize(e.target.value)
            }}
            value={size}
            type={"text"}
        />
    )
}

export default SizeInput;

const StyledInput = styled.input`
  width: 5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
`