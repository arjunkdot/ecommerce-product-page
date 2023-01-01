import styled from 'styled-components';

export const Toast = styled.div`
  @keyframes toastSlideUp{
    0%{
      bottom: -10px;
      opacity: 0;
    }
    25%{
      bottom: 20px;
      opacity: 1;
    }
    75%{
      bottom: 20px;
      opacity: 1;
    }
    100%{
      bottom: -0px;
      opacity: 0;
    }
  };
  position: fixed;
  bottom: 20px;
  left: calc(50% - 75px);
  padding: 1rem 1.5rem;
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({theme})=> theme.colors.veryDarkBlue};
  text-align: center;
  animation: toastSlideUp 2s ease-in-out forwards;
`