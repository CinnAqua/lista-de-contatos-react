import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao } from '../../styles'
import React from 'react'
import { IMaskInput } from 'react-imask'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  tel: telOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  function salvarEdicao() {
    dispatch(
      editar({
        nome,
        email,
        tel,
        id
      })
    )
    setEstaEditando(false)
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
  }

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])
  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])
  useEffect(() => {
    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }
  }, [telOriginal])

  return (
    <S.Card>
      <input
        disabled={!estaEditando}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /><br />
      <label>E-mail: </label>
      <input
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <label>Telefone: </label>
      <IMaskInput
          disabled={!estaEditando}
          value={tel}
          mask="(00)0000-0000"
          onChange={({ target }) => setTel(target.value)}
        />
      <div>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelarEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemover>
          </>
        )}
      </div>
    </S.Card>
  )
}

export default Contato
