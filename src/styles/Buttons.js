import styled from "styled-components";

// Button Base
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Kumbh Sans', sans-serf;
  font-weight: bold;
  border: none;
  border-radius: 0.6rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    transition: all 0.3s ease-in-out;
  }
`;

// Primary Button
export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};

  &:hover{
    filter: contrast(95%);
  }
`
/// Primary Block Button
export const ButtonPrimaryBlock = styled(ButtonPrimary)`
  width: 100%;
  
`;