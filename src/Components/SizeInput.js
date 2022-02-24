import React, {useRef, useState} from "react";
import styled from "styled-components";

const SizeInput = ({detectSize}) => {
    const [size, setSize] = useState(3);
    const ref = useRef();
    return (
        <StyledForm onSubmit={e => {
            e.preventDefault();
            detectSize(ref.current.value)
            console.log(ref.current.value)
        }}>
            <StyledLabel>
                <StyledLabelText>Type 3 to 25</StyledLabelText>
                <StyledInput
                    onChange={e => {
                        setSize(e.target.value);
                    }}
                    min={3}
                    max={25}
                    ref={ref}
                    value={size}
                    type={"number"}
                />
            </StyledLabel>
        </StyledForm>
    )
}

export default SizeInput;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLabel = styled.label`
  
`

const StyledLabelText = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.25rem;
  
  color: white;

  font-family: 'Roboto Serif', sans-serif;
  font-size: 0.75rem;
`

const StyledInput = styled.input`
  width: 5rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  
  color: white;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  
  background-color: transparent;
`