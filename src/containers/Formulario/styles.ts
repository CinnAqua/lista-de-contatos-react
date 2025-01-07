import styled from "styled-components";
import { Botao } from "../../styles";

export const Card = styled.form`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px 16px;
  margin: 32px auto;
  border-radius: 16px;
  width: 40%;
  text-align: center;

  label {
    font-size: 12px;
    color: #686868;
  }
  input {
    background-color: transparent;
    text-align: center;
    font-size: 16px;
    color: #000;
    padding: 4px;
    margin-bottom: 8px;
    width: 80%;
  }
`

export const BotaoSalvar = styled(Botao)`
  color: #00ad17;
`
