import { FormEvent, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { MainContainer } from '../../styles'
import React from 'react'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        tel
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Card onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
          required
        /> <br />
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="E-mail"
        /> <br />
        <IMaskInput
          value={tel}
          mask="(00)0000-0000"
          onChange={({ target }) => setTel(target.value)}
          type="text"
          placeholder="Telefone"
        /> <br />
        <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
      </S.Card>
    </MainContainer>
  )
}

export default Formulario
