import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/busca'
import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.busca)

  const buscaContatos = () => {
    let contatosFiltrados = itens
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    return contatosFiltrados
  }
  const contatos = buscaContatos()

  return (
    <MainContainer>
      <S.BarraDeBusca
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(e) => dispatch(alterarTermo(e.target.value))}
      />
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato id={c.id} nome={c.nome} email={c.email} tel={c.tel} />
          </li>
        ))}
        <S.Li>
          <Link to="/novo">Adicionar nova tarefa</Link>
        </S.Li>
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
