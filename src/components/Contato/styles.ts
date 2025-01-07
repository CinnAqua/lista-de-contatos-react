import styled from 'styled-components'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px 16px;
  margin: 32px;
  border-radius: 16px;
  text-align: center;

  label {
    font-size: 12px;
    color: #686868;
  }
  input {
    background-color: transparent;
    text-align: center;
    border: none;
    font-size: 16px;
    color: #000;
    padding-bottom: 8px;
    width: 80%;
  }
`

export const BotaoEditar = styled(Botao)`
  color: #1100ff;
`

export const BotaoSalvar = styled(Botao)`
  color: #00ad17;
`
export const BotaoRemover = styled(Botao)`
  color: #ff0000;
`
