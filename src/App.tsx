import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Formulario from './containers/Formulario'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'
import React from 'react'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <ListaDeContatos />
  },
  {
    path: '/novo',
    element: <Formulario />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
