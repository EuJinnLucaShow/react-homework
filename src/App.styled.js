import styled, { keyframes } from 'styled-components';

export const AppDiv = styled.div`
  text-align: center;
`

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spinAnimation} infinite 20s linear;
`

export const AppHeader = styled.header`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: black;  
`

export const AppLink = styled.a`
  color: #61dafb;
`

