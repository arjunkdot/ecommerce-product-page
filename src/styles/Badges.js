import styled from 'styled-components';

// Badge Base
const Badge = styled.span`
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 5px 8px;
  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 1rem;
  }
`;

export const BadgePrimary = styled(Badge)`
  background-color: ${({ theme }) => theme.colors.paleOrange};
  color: ${({ theme }) => theme.colors.orange};
`;