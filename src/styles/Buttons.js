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

  img:first-child{
    margin-right: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1rem;
    max-height: 58px;
  }
`;

// Primary Button
export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};

  &:hover{
    filter: contrast(95%);
  }

  img{
    fill: ${({theme})=> theme.colors.white};
    stroke: ${({theme})=> theme.colors.white};
  }
`
/// Primary Block Button
export const ButtonPrimaryBlock = styled(ButtonPrimary)`
  width: 100%;
`;

/// Primary Block Button w/ Shadow
export const ButtonPrimaryBlockShadow = styled(ButtonPrimary)`
  box-shadow: 0px 20px 25px 0px hsl(25, 100%, 95%);

  &:hover{
    opacity: 0.7;
  }
`;