import styled from "styled-components";

export const Overlay = styled.div`
@media (max-width: ${({ theme }) => theme.media.medium}){
 display: block;
 position: fixed;
 left: 0;
 top: 0;
 height: 100%;
 width: 100%;
 z-index: 98;
 background: rgba(0, 0, 0, 0.5);
}
`;