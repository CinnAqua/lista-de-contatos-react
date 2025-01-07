import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    resize: none;
    justify-content: center;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`

export const MainContainer = styled.div`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: 40% 40%;
    column-gap: 4%;
  }
`

export const Botao = styled.button`
  text-decoration: underline;
  background-color: transparent;
  font-size: 16px;
  border: none;
  margin: 0 10px;
  padding: 5px;
  box-shadow: none;
  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`

export default EstiloGlobal
